"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/SkillSet";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import EducationInstitute from "@/components/EducationInstitute";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="mb-20000">
          <Hero />
        </div>
        <div className="mb-20000">
          <Experience />
        </div>
        <div className="mb-20000">
          <RecentProjects />
        </div>
        <div className="mb-20000">
          <EducationInstitute />
        </div>
        <div className="mb-20000">
          <Approach />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
