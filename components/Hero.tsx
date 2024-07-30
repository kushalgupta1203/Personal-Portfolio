import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ImagesSlider } from "./ui/ImagesSlider";
import { socialMedia } from "@/data";
import Image from "next/image"; // Import next/image for optimized image loading

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black-100/[0.03]
       absolute top-0 left-0 flex items-center justify-start"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col items-center justify-between relative my-20 z-10 sm:flex-row sm:items-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center sm:items-start justify-center mt-[-100px]">
          <TextGenerateEffect
            words="Hello,"
            className="uppercase tracking-widest text-l text-center sm:text-left text-blue-100 max-w-80"
          />

          <TextGenerateEffect
            words="I am Kushal Gupta"
            className="text-center sm:text-left text-[33.6px] md:text-[3.8rem] lg:text-[3.5rem] text-white"
          />

          <TextGenerateEffect
            words="Data Analyst, Software Developer & ML Enthusiast"
            className="text-center sm:text-left text-[22.4px] md:text-[1.50rem] lg:text-[1.50rem] text-purple"
          />
        </div>
        
        {/* ImagesSlider with kushal.png */}
        <div className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md h-[450px] mt-4 sm:mt-[-35px] sm:ml-[-15px]">
          <ImagesSlider
            images={['/kushal.png']}
            autoplay={true}
            direction="up"
            overlay={false}
            className="w-full h-full object-cover"
          >
            {/* Providing an empty React node to satisfy the 'children' prop requirement */}
            <></>
          </ImagesSlider>
        </div>
      </div>

      {/* Magic Button on the top right */}
      <div className="absolute top-[35px] right-4 z-20 sm:top-[25px] md:top-[8px] lg:top-[8px]">
        <a href="https://drive.google.com/file/d/1lAyiSmqHePmibibz3SmUQQSyOlqBHbMv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Social Media Buttons */}
      <div className="absolute top-[50px] left-4 flex space-x-3 z-20">
        {socialMedia.map((info) => (
          <a
            href={info.url}
            key={info.id}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300 sm:border-2 border-0"
          >
            <Image src={info.img} alt="icons" width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
