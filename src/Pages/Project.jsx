import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pro from "../Components/Pro";
import Mobile from "../Components/Mobile";
import { projects } from "./data.jsx";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    const trigger = ScrollTrigger.create({
      trigger: heading,
      start: "60% top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: false,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div id="projects" className="w-full min-h-screen text-white relative pt-20">
      <div
        ref={headingRef}
        className="flex py-4 flex-col items-center h-fit justify-center text-center bg-black z-10"
      >
        <h1 className="text-sm sm:text-md ">My Work</h1>
        <h1 className="text-orange-400 text-xl sm:text-2xl font-semibold mt-2">
          Projects
        </h1>
      </div>

      <div className="md:flex flex-col  px-4 md:px-36 gap-10 pt-24">
        <div className="md:self-start relative">
          <div className="absolute rounded-full opacity-40 w-[200px] h-[200px] blur-[100px] bg-gradient-to-tr from-blue-800 to-blue-400 top-[-5%] right-[0%] z-0" />
          <Pro obj={projects.spark} />
        </div>

        <div className="md:self-end relative">
          <div className="absolute rounded-full opacity-40 w-[200px] h-[200px] blur-[100px] bg-gradient-to-tr from-blue-800 to-blue-400 top-[-5%] right-[0%] z-0" />
          <Pro obj={projects.wave} />
        </div>

        <div className="md:self-start relative">
          <div className="absolute rounded-full opacity-40 w-[200px] h-[200px] blur-[100px] bg-gradient-to-tr from-blue-800 to-blue-400 top-[0%] right-[0%] z-0" />
          <Pro obj={projects.glow} />
        </div>
      </div>

     
    </div>
  );
}

export default Project;
