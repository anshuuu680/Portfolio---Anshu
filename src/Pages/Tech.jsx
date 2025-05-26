import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "../Components/Skills";
import { skills } from "./data.jsx";

gsap.registerPlugin(ScrollTrigger);

function Tech() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="skills"  className="w-full min-h-screen pt-28 relative text-gray-300">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-sm sm:text-md">My Skills</h1>
        <p className="text-xl sm:text-2xl text-orange-400 font-semibold mt-2">What I know</p>
      </div>

          <div className="absolute rounded-full opacity-40 w-[200px] h-[200px] blur-[100px] bg-gradient-to-tr from-blue-800 to-blue-400 top-[20%] right-[18%] z-0" />
          
      <div className="flex  flex-col w-full items-center mt-10 gap-10 px-4">

        {[
          { title: "Core Technologies", data: skills.core },
          { title: "Backend and Databases", data: skills.backend },
          { title: "Development Tools", data: skills.tools },
        ].map((section, idx) => (
          <div
            key={idx}
            className="w-full max-w-7xl"
            ref={(el) => (sectionRefs.current[idx] = el)}
          >
            <div className="flex flex-col items-center gap-6 p-5">
              <h2
                className="text-2xl sm:text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text tracking-wider"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(103, 232, 249, 0.6), rgba(96, 165, 250, 0.6), rgba(192, 132, 252, 0.6))",
                }}
              >
                {section.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full">
                {section.data.map((skill, index) => (
                  <Skills
                    key={index}
                    imgSrc={skill.imgSrc}
                    techName={skill.techName}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
