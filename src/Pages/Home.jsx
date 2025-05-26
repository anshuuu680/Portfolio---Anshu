import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

function Home() {
  const words = [
    "Mern Stack Developer",
    "Flutter Developer",
    "Software Engineer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );
  }, [currentWordIndex]);

  return (
    <div
      id="home"
      className="w-full min-h-screen px-4 py-10  text-white flex items-center justify-center"
    >
      <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-7xl gap-10">
        <div
          ref={containerRef}
          className="w-full md:min-w-[50vmax]  flex flex-col items-center text-center md:text-left  md:items-start md:pl-36  gap-8"
        >
          <div>
            <h1 className="text-lg text-gray-400">Hello👋, I'm</h1>
            <h1 className="font-semibold text-2xl md:text-[2vmax] mb-2">
              Anshu Patidar
            </h1>
            <h1
              ref={textRef}
              className="text-3xl md:text-[3vmax] w-fit  font-bold h-[50px] "
            >
              {words[currentWordIndex].split("").map((char, i) => (
                <span key={i} className="inline-block myText">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
              <a
                href="../public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-lg px-4 py-2 border border-gray-700 bg-[linear-gradient(135deg,_rgba(0,123,255,0.2),_rgba(0,0,0,0.1))] text-blue-400 font-semibold backdrop-blur-md cursor-pointer hover:scale-105 transition-transform duration-300">
                  <span className="font-light md:text-[1vmax]">View Resume</span>
                </div>
              </a>

              <div className="rounded-lg px-4 py-2 border border-gray-700 bg-[linear-gradient(135deg,_rgba(138,43,226,0.2),_rgba(0,0,128,0.1))] text-white font-semibold backdrop-blur-md">
                <span className="font-light">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer md:text-[1vmax]"
                  >
                    Contact Me
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-4  w-full">
            <a
              href="https://github.com/anshuuu680"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/anshu-patidar-478652228/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                />
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                />
              </svg>
            </a>

            <hr className="w-10 text-gray-600" />
          </div>
        </div>

        <div className="w-full  md:w-2/3 flex  items-center md:justify-start justify-center relative">
          <div className="absolute rounded-full opacity-40 w-[200px] h-[200px] blur-[80px] bg-gradient-to-tr from-blue-800 to-blue-400 top-[20%] right-[10%] z-0" />
          <div className="absolute rounded-full opacity-40 w-[200px] h-[200px] blur-[80px] bg-gradient-to-tr from-blue-800 to-blue-400 bottom-[10%] left-[10%] z-0" />

          <div className="relative z-10 w-[30vmax] h-[30max] md:w-[30vmax] md:h-[30vmax] max-w-[400px]   rounded-3xl border border-gray-800">
            <div className="w-full h-full md:rotate-10 rounded-3xl md:border border-gray-700 hover:rotate-0 transition-transform duration-500 ease-in-out relative overflow-hidden">
              <img
                src="/cat.png"
                alt="Cat"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
