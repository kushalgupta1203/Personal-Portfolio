"use client";
import React from "react";
import { FlipWords } from "./ui/FlipWords";

export function FlipWordsDemo() {
  // Update words to be an array of arrays of strings
  const words: string[][] = [
    ["You know the business,"],
    ["I know the chemistry"]
  ];

  return (
    <div className="h-[3rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
      </div>
    </div>
  );
}
