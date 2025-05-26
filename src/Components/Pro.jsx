import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechButton from "./TechButton.jsx";
import LinkButton from "./LinkButton.jsx";
import Slider from "./Slider.jsx";

gsap.registerPlugin(ScrollTrigger);

function Pro({ obj }) {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    let tl;
    let st;

    if (window.innerWidth <= 768) {
      gsap.set(containerRef.current, {
        width: "100%",
      });
      gsap.set(leftPanelRef.current, {
        width: "100%",
      });
      gsap.set(rightPanelRef.current, {
        width: "100%",
        opacity: 1,
        y: 0,
        position: "static",
        pointerEvents: "auto",
        clearProps: "transform",
      });
    } else {
      gsap.set(rightPanelRef.current, {
        x: "-100%",
        opacity: 0,
        pointerEvents: "none",
        width: 0,
        position: "absolute",
      });

      st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          if (tl) tl.kill();
          tl = gsap.timeline();

          tl.to(containerRef.current, {
            width: "64vmax",
            duration: 0.5,
            ease: "power2.out",
          });
          tl.to(
            leftPanelRef.current,
            {
              width: "32vmax",
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          );
          tl.to(
            rightPanelRef.current,
            {
              x: 0,
              opacity: 1,
              width: "32vmax",
              duration: 0.5,
              ease: "power2.out",
              pointerEvents: "auto",
              position: "static",
            },
            "<"
          );
        },
      });
    }

    return () => {
      if (st) st.kill();
      if (tl) tl.kill();
    };
  }, []);

  return (
   <div
  ref={containerRef}
  className="max-w-[70vmax] mx-auto border border-gray-900 rounded-lg shadow-lg px-4 py-6 md:py-4 flex flex-col md:flex-row items-center justify-start gap-4 transition-all duration-300 backdrop-blur-md overflow-visible relative"
>
  <div
    ref={leftPanelRef}
    className="md:w-[30vmax] h-auto md:h-[35vmax] rounded-xl   bg-[linear-gradient(135deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01),_rgba(255,255,255,0.02))] p-6 flex items-center justify-center text-gray-300 shadow-inner"
  >
    <Slider />
  </div>

  <div
    ref={rightPanelRef}
    className="w-full md:w-[30vmax] h-auto md:h-fit  border rounded-xl border-gray-900 bg-[linear-gradient(135deg,_rgba(0,0,0,0.6),_rgba(0,0,0,0.3))] p-6 flex text-gray-300  shadow-inner absolute md:static right-0 flex-col items-start justify-start md:items-center  opacity-0 pointer-events-none"
    style={{
      transform: "translateX(-100%)",
    }}
  >
    <h1 className="text-[2vmax] font-semibold mb-2">
      {obj?.title || "Project Title"}
    </h1>
    <p className="font-light text-gray-400 text-[0.9vmax] leading-relaxed">
      {obj?.description ||
        "This is a brief description of the project. It highlights the main features and functionalities."}
    </p>

    <div className="w-full mt-4">
      <h1 className="font-semibold text-[1vmax] mb-4">Technologies Used</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {obj?.technologies?.map((tech, index) => (
          <TechButton
            key={index}
            imgSrc={tech.imgSrc}
            techName={tech.techName}
          />
        ))}
      </div>

      <div className="w-full flex flex-wrap gap-4">
        <LinkButton
          link={obj?.link}
          icon={obj?.linkIcon}
          name={"Website"}
        />
        <LinkButton link={obj?.github} icon={obj?.githubIcon} />
      </div>
    </div>
  </div>
</div>

  );
}

export default Pro;