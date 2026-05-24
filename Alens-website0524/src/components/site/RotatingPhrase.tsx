"use client";

import { useEffect, useState } from "react";

const phrases = ["推动协作", "沉淀经验", "优化流程"];

export function RotatingPhrase() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionEnabled(!mediaQuery.matches);

    const handleChange = () => setMotionEnabled(!mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!motionEnabled) {
      setPhraseIndex(0);
      setVisibleLength(phrases[0].length);
      setIsDeleting(false);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    const isComplete = visibleLength === currentPhrase.length;
    const isEmpty = visibleLength === 0;
    const delay = isComplete && !isDeleting ? 1250 : isDeleting ? 48 : 72;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setPhraseIndex((index) => (index + 1) % phrases.length);
        setIsDeleting(false);
        return;
      }

      setVisibleLength((length) => length + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, motionEnabled, phraseIndex, visibleLength]);

  const currentPhrase = phrases[phraseIndex].slice(0, visibleLength);

  return (
    <span className="typewriter-phrase" aria-live="polite">
      {currentPhrase || "\u00a0"}
    </span>
  );
}
