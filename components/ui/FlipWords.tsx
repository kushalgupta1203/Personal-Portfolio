"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this utility is correctly imported

interface FlipWordsProps {
  words: string[][];
  duration?: number; // Duration for word transition
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 1600, // Reduced by 30% from 3000ms
  className,
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextSentenceIndex = (currentSentenceIndex + 1) % words.length;
    const nextWordIndex = (currentWordIndex + 1) % words[nextSentenceIndex].length;

    setCurrentSentenceIndex(nextSentenceIndex);
    setCurrentWordIndex(nextWordIndex);
    setIsAnimating(true);
  }, [currentSentenceIndex, currentWordIndex, words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration); // Duration for word transition
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2 whitespace-nowrap", className)}
        key={currentSentenceIndex}
      >
        {words[currentSentenceIndex].map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            {wordIndex > 0 && ' '} {/* Add space between words */}
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: letterIndex * 0.056, duration: 0.28 }} // Reduced by 30%
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
