"use client";
import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { socialMedia } from "@/data";
import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./MagicButton";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";

// Footer Component
const Footer: React.FC = () => {
  const wordArrays = [
    ["You", "know", "the", "business,"],
    ["I", "know", "the", "chemistry."],
    ["Maybe,", "You", "and", "I", "could", "partner", "up."],
  ];

  const [copiedButton, setCopiedButton] = useState<'email' | 'phone' | null>(null);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = (type: 'email' | 'phone') => {
    let text: string;
    if (type === 'email') {
      text = "kushalgupta1203@gmail.com";
    } else {
      text = "+91 8506858498";
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopiedButton(type);
      setTimeout(() => setCopiedButton(null), 2000); // Hide animation after 2 seconds
    }).catch((error) => {
      console.error("Failed to copy text:", error);
    });
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      {/* Centered content */}
      <div className="flex flex-col items-center text-center">
        <div className="h-[3rem] flex justify-center items-center px-4">
          <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            <FlipWords words={wordArrays} />
          </div>
        </div>

        {/* "Let's connect" heading */}
        <h1 className="heading lg:max-w-[45vw] mt-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
          Let&apos;s <span className="text-purple">connect</span>
        </h1>
      </div>

      {/* MagicButtons side by side */}
      <div className="relative flex justify-center mt-8 space-x-4">
        <div className="relative">
          <MagicButton
            title={copiedButton === 'phone' ? "Number is Copied!" : "Copy Phone Number"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={() => handleCopy('phone')}
            otherClasses="!bg-[#161A31]"
          />
          {copiedButton === 'phone' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Lottie options={defaultOptions} height={300} width={300} /> {/* Increased size */}
            </div>
          )}
        </div>
        <div className="relative">
          <MagicButton
            title={copiedButton === 'email' ? "Email is Copied!" : "Copy Email Address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={() => handleCopy('email')}
            otherClasses="!bg-[#161A31]"
          />
          {copiedButton === 'email' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Lottie options={defaultOptions} height={300} width={300} /> {/* Increased size */}
            </div>
          )}
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © Kushal Gupta
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.url}
              key={info.id}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-0 border-black-300 sm:border-2"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
