import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    location: string;
    grade: string;
    year: string;
    activities: string;
    type: "school" | "college";
    branch?: string;
    level?: string;
    course?: string; // Optional property for colleges
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused] md:hover:[animation-play-state:running] lg:hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[80vw] max-w-full flex-shrink-0 border border-slate-800 p-3 md:p-5 md:w-[60vw] h-[40rem] md:h-[50rem] lg:w-[40vw] lg:h-[25rem] rounded-xl"
            style={{
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <div className="absolute bottom-0 left-0 flex items-center space-x-2 p-2 md:space-x-3 md:p-4">
              <img
                src={item.type === "school" ? "/lps.webp" : "/ggsipu.png"}
                alt={item.type === "school" ? "School" : "College"}
                className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border border-slate-700"
              />
              <div className="flex flex-col">
                <span className="text-sm md:text-xl font-bold leading-[1.6] text-white">
                  {item.name}
                </span>
                <span className="text-xs md:text-sm leading-[1.6] text-white-200 font-normal">
                  {item.location}
                </span>
              </div>
            </div>
            <div className="pt-16 pb-2 space-y-4 md:space-y-1">
              {item.type === "college" && item.course && (
                <div className="flex flex-wrap">
                  <div className="w-24 text-sm md:text-lg leading-[1.6] text-white font-bold md:mr-8">
                    Course:
                  </div>
                  <div className="flex-1 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.course}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap">
                <div className="w-24 text-sm md:text-lg leading-[1.6] text-white font-bold md:mr-8">
                  Grade:
                </div>
                <div className="flex-1 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.grade}
                </div>
              </div>
              {item.type === "school" && item.level && (
                <div className="flex flex-wrap">
                  <div className="w-24 text-sm md:text-lg leading-[1.6] text-white font-bold md:mr-8">
                    Level:
                  </div>
                  <div className="flex-1 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.level}
                  </div>
                </div>
              )}
              {item.type === "college" && item.branch && (
                <div className="flex flex-wrap">
                  <div className="w-24 text-sm md:text-lg leading-[1.6] text-white font-bold md:mr-8">
                    Branch:
                  </div>
                  <div className="flex-1 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.branch}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap">
                <div className="w-24 text-sm md:text-lg leading-[1.6] text-white font-bold md:mr-8">
                  Year:
                </div>
                <div className="flex-1 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.year}
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-24 text-sm md:text-lg leading-[1.6] text-white font-bold md:mr-8">
                  Activities:
                </div>
                <div className="flex-1 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.activities}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
