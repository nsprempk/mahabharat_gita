import { useEffect, useRef, useState } from "react";
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
  const utteranceRef = useRef(null);

  /*
   * Real audio URL
   */
  const audioUrl =
    typeof audio === "string"
      ? audio
      : audio && typeof audio === "object"
        ? audio?.[voice] || ""
        : "";

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
      const availableVoices = window.speechSynthesis.getVoices();

      setVoices(availableVoices);
    };

    loadVoices();

    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  /*
   * Stop everything when component is removed
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
   * Stop when voice changes
   */
  useEffect(() => {
    stopAudio();
  }, [voice]);

  /*
   * Get language
   *
   * Sanskrit is spoken using Hindi voice because
   * browser TTS usually does not provide Sanskrit voices.
   */
  const getLanguageCode = () => {
    if (language === "en") {
      return "en-IN";
    }

    return "hi-IN";
  };

  /*
   * Find a suitable voice
   */
  const getSpeechVoice = () => {
    if (!voices.length) {
      return null;
    }

    const languageCode = getLanguageCode();

    /*
     * First try exact language.
     */
    let languageVoices = voices.filter(
      (item) => item.lang?.toLowerCase() === languageCode.toLowerCase(),
    );

    /*
     * Then try language family.
     */
    if (!languageVoices.length) {
      languageVoices = voices.filter((item) =>
        item.lang?.toLowerCase().startsWith(languageCode.substring(0, 2)),
      );
    }

    /*
     * If no matching language exists,
     * don't randomly choose an unrelated voice.
     */
    if (!languageVoices.length) {
      return null;
    }

    /*
     * Try to find male/female voice.
     *
     * Browser voice names are inconsistent,
     * so this is only a best effort.
     */
    const femaleWords = [
      "female",
      "woman",
      "samantha",
      "veena",
      "heera",
      "google hindi female",
    ];

    const maleWords = ["male", "man", "ravi", "hemant", "google hindi male"];

    const keywords = voice === "female" ? femaleWords : maleWords;

    const selected = languageVoices.find((item) => {
      const name = item.name?.toLowerCase() || "";

      return keywords.some((keyword) => name.includes(keyword));
    });

    return selected || languageVoices[0];
  };

  /*
   * Stop audio
   */
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    utteranceRef.current = null;

    setPlaying(false);
  };

  /*
   * Play real audio
   */
  const playRealAudio = async () => {
    try {
      /*
       * Create audio player if needed
       */
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

      /*
       * If URL changed, reload it.
       */
      if (audioRef.current.src !== audioUrl) {
        audioRef.current.src = audioUrl;
        audioRef.current.load();
      }

      await audioRef.current.play();

      setPlaying(true);
    } catch (error) {
      console.error("Audio playback error:", error);

      /*
       * If real audio fails but text exists,
       * fall back to TTS.
       */
      if (hasText) {
        playSpeech();
      } else {
        setPlaying(false);
      }
    }
  };

  /*
   * Text-to-speech
   */
  const playSpeech = () => {
    if (!("speechSynthesis" in window)) {
      alert(
        "Text-to-speech is not supported by this browser. Please use Chrome.",
      );

      return;
    }

    if (!hasText) {
      alert("No text is available for audio.");

      return;
    }

    /*
     * Stop previous speech
     */
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text.trim());

    const selectedVoice = getSpeechVoice();

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = getLanguageCode();
    }

    /*
     * Natural speaking speed
     */
    utterance.rate = language === "hi" ? 0.82 : 0.9;

    /*
     * Slight difference between male/female.
     *
     * This does NOT create a real male/female voice.
     * It only changes pitch if the browser uses
     * the same voice.
     */
    utterance.pitch = voice === "female" ? 1.05 : 0.9;

    utterance.volume = 1;

    utterance.onstart = () => {
      setPlaying(true);
    };

    utterance.onend = () => {
      setPlaying(false);
      utteranceRef.current = null;
    };

    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event);

      setPlaying(false);
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;

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
      stopAudio();
      return;
    }

    /*
     * Prefer real audio.
     *
     * If no real audio exists,
     * use Text-to-Speech.
     */
    if (hasRealAudio) {
      await playRealAudio();
    } else {
      playSpeech();
    }
  };

  /*
   * Voice selection
   */
  const handleVoiceChange = (newVoice) => {
    stopAudio();

    setVoice(newVoice);
  };

  return (
    <div className="rounded-2xl border-2 border-[#ead8bd] bg-[#fffaf2] p-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* PLAY BUTTON */}
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
            transition
            duration-200
            ${
              canPlay
                ? "bg-[#7a421f] text-white hover:scale-105 hover:bg-[#542b18] active:scale-95"
                : "cursor-not-allowed border-gray-400 bg-gray-300 text-gray-500"
            }
          `}
        >
          {playing ? (
            <Pause size={26} strokeWidth={3} className="text-white" />
          ) : (
            <Play
              size={26}
              strokeWidth={3}
              fill="white"
              className="ml-0.5 text-white"
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
                  ? "Audio ready"
                  : "Tap play to listen"}
          </p>
        </div>

        {/* VOICE */}
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
