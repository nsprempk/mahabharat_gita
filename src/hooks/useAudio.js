import { useEffect, useRef, useState } from "react";

export default function useAudio() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const play = (url) => {
    if (!url) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(url);

    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime);
    });

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
    });

    audio.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = (url) => {
    if (isPlaying) {
      pause();
    } else {
      play(url);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return {
    isPlaying,
    progress,
    duration,
    play,
    pause,
    toggle,
  };
}
