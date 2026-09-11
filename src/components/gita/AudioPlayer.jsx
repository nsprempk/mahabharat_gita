import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

export default function AudioPlayer({
  audio,
  label,
  text = "",
  language = "hi",
}) {
  const [voice, setVoice] = useState("male");
  const [playing, setPlaying] = useState(false);
  const [voices, setVoices] = useState([]);

  const audioRef = useRef(null);

  const audioUrl = useMemo(() => {
    if (typeof audio === "string") {
      return audio;
    }

    if (audio && typeof audio === "object") {
      return audio?.[voice] || "";
    }

    return "";
  }, [audio, voice]);

  const hasRealAudio = Boolean(audioUrl);
  const hasText = Boolean(text?.trim());
  const canPlay = hasRealAudio || hasText;

  /*
   * Load browser voices
   */
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();

    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  /*
   * Cleanup
   */
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  /*
   * Stop audio when voice changes
   */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setPlaying(false);
  }, [voice]);

  /*
   * Find suitable browser voice
   */
  const getSpeechVoice = () => {
    if (!voices.length) {
      return null;
    }

    const languageCode = language === "hi" ? "hi-IN" : "en-IN";

    const matchingVoices = voices.filter((item) =>
      item.lang?.toLowerCase().startsWith(languageCode.toLowerCase()),
    );

    const pool = matchingVoices.length > 0 ? matchingVoices : voices;

    const femaleKeywords = [
      "female",
      "woman",
      "zira",
      "samantha",
      "veena",
      "heera",
    ];

    const maleKeywords = ["male", "man", "ravi", "hemant"];

    const keywords = voice === "female" ? femaleKeywords : maleKeywords;

    const matchingVoice = pool.find((item) => {
      const name = item.name?.toLowerCase() || "";

      return keywords.some((keyword) => name.includes(keyword));
    });

    return matchingVoice || pool[0] || null;
  };

  /*
   * Real audio
   */
  const playRealAudio = async () => {
    try {
      if (!audioRef.current) {
        const player = new Audio(audioUrl);

        player.addEventListener("ended", () => {
          setPlaying(false);
        });

        player.addEventListener("error", () => {
          console.error("Unable to load audio:", audioUrl);

          setPlaying(false);
        });

        audioRef.current = player;
      }

      await audioRef.current.play();

      setPlaying(true);
    } catch (error) {
      console.error("Audio playback error:", error);

      setPlaying(false);
    }
  };

  /*
   * Browser TTS
   */
  const playSpeech = () => {
    if (!("speechSynthesis" in window)) {
      alert(
        "Audio playback is not supported by this browser. Please use Google Chrome.",
      );

      return;
    }

    if (!hasText) {
      alert("No text is available for audio playback.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = getSpeechVoice();

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
    }

    utterance.rate = 0.85;
    utterance.pitch = voice === "female" ? 1.05 : 0.9;
    utterance.volume = 1;

    utterance.onstart = () => {
      setPlaying(true);
    };

    utterance.onend = () => {
      setPlaying(false);
    };

    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event);

      setPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  /*
   * Play / Pause
   */
  const handlePlay = async () => {
    if (!canPlay) {
      return;
    }

    if (playing) {
      if (hasRealAudio && audioRef.current) {
        audioRef.current.pause();
      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

      setPlaying(false);
      return;
    }

    if (hasRealAudio) {
      await playRealAudio();
    } else {
      playSpeech();
    }
  };

  /*
   * Voice change
   */
  const handleVoiceChange = (newVoice) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setPlaying(false);
    setVoice(newVoice);
  };

  return (
    <div className="rounded-2xl border-2 border-[#ead8bd] bg-[#fffaf2] p-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* PLAY / PAUSE BUTTON */}
        <button
          type="button"
          onClick={handlePlay}
          disabled={!canPlay}
          aria-label={playing ? "Pause audio" : "Play audio"}
          className={`
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-full
            border-2
            border-[#5b321f]
            shadow-lg
            transition-all
            duration-200
            ${
              canPlay
                ? "bg-[#7a421f] text-white hover:bg-[#542b18] hover:scale-105 active:scale-95"
                : "cursor-not-allowed bg-gray-300 text-gray-500 border-gray-400"
            }
          `}
        >
          {playing ? (
            <Pause size={26} strokeWidth={3.5} className="text-white" />
          ) : (
            <Play
              size={26}
              strokeWidth={3.5}
              fill="white"
              className="text-white ml-0.5"
            />
          )}
        </button>

        {/* LABEL */}
        <div className="mr-auto min-w-[150px]">
          <div className="flex items-center gap-2">
            <Volume2
              size={18}
              strokeWidth={2.5}
              className={canPlay ? "text-[#7a421f]" : "text-gray-400"}
            />

            <p className="text-base font-bold text-[#4a2b1b]">{label}</p>
          </div>

          <p className="mt-1 text-xs font-medium text-gray-500">
            {!canPlay
              ? "Audio not available"
              : playing
                ? "Playing..."
                : hasRealAudio
                  ? voice === "male"
                    ? "Male Voice"
                    : "Female Voice"
                  : "Click play to listen"}
          </p>
        </div>

        {/* VOICE SELECTOR */}
        <div className="flex rounded-full border-2 border-[#d9c0a0] bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => handleVoiceChange("male")}
            className={`
              rounded-full
              px-4
              py-2
              text-xs
              font-bold
              transition
              ${
                voice === "male"
                  ? "bg-[#7a421f] text-white shadow"
                  : "text-[#5b321f] hover:bg-[#fff3e2]"
              }
            `}
          >
            Male
          </button>

          <button
            type="button"
            onClick={() => handleVoiceChange("female")}
            className={`
              rounded-full
              px-4
              py-2
              text-xs
              font-bold
              transition
              ${
                voice === "female"
                  ? "bg-[#7a421f] text-white shadow"
                  : "text-[#5b321f] hover:bg-[#fff3e2]"
              }
            `}
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
}
