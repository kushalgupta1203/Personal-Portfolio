"use client";

import React from "react";
import { education } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const EducationInstitute = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        Academic achievements from
        <span className="text-purple"> my educational journey</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[130vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={education}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationInstitute;
