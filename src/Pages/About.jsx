import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageElem = imageRef.current;
    const textElem = textRef.current;

    // Image animation: fade in + scale up
    gsap.fromTo(
      imageElem,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageElem,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Text animation: fade in + slide up
    gsap.fromTo(
      textElem,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textElem,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div id="about"  className="w-full h-fit px-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-sm sm:text-md">Know </h1>
        <p className="text-xl sm:text-2xl text-orange-400 font-semibold mt-2">
          About Me
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between h-fit items-center py-20">
        <div
          ref={imageRef}
          className="w-1/2 h-full flex flex-col items-center justify-center"
        >
          <div className="w-[70vw] max-w-[30vmax] h-[70vw] max-h-[30vmax] rounded-full border border-gray-900">
            <div className="w-full h-full">
              <img
                src="./public/cat.png"
                alt="Cat"
                className="relative max-w-full max-h-full object-cover z-10"
              />
            </div>
          </div>
        </div>
        <div
          ref={textRef}
          className="w-full md:w-1/2 h-fit flex items-center justify-center"
        >
          <p className="text-zinc-300 md:text-[1vmax] text-[1.4vmax] font-light leading-relaxed max-w-2xl">
            From my very first line of code, I’ve been driven by a passion for
            creating impactful software that truly enhances user experiences.
            I’m proficient in React, Flutter, and the full MERN stack, building
            everything from AI-powered chat apps and video summarizers to task
            managers and course platforms.
            <br />
            <br />
            I love crafting clean, responsive UIs using Tailwind CSS,
            integrating real-time features with WebSockets, and leveraging AI
            to add smart functionality.
            <br /> <br />
            Whether it’s designing scalable backend systems or intuitive
            frontends, I focus on efficiency, usability, and innovation.
            Outside coding, I enjoy mentoring others and continuously exploring
            new technologies to solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
