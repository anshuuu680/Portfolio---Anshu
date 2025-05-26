import React from "react";
import TechButton from "./TechButton";
import LinkButton from "./LinkButton";
import Slider from "./slider";

function Mobile({ obj }) {
  return (
    <div className="w-full mx-auto border border-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center justify-start bg-[linear-gradient(135deg,_rgba(30,30,30,0.6),_rgba(10,10,10,0.3))] gap-4 backdrop-blur-md">
      {/* Image/Slider Section */}
      <div className="w-full rounded-xl border-gray-700 bg-gradient-to-b from-[#1f1f1f]/80 to-[#0f0f0f]/70 p-4 flex items-center justify-center text-gray-300 shadow-inner">
        <Slider />
      </div>

      {/* Content Section */}
      <div className="w-full rounded-xl border-gray-700 bg-gradient-to-b from-[#1f1f1f]/80 to-[#0f0f0f]/70 p-6 flex flex-col text-gray-300 shadow-inner">
        <h1 className="text-2xl font-semibold font-sans">
          {obj?.title || "Project Title"}
        </h1>
        <p className="font-light text-gray-400 mt-2">
          {obj?.description ||
            "This is a brief description of the project. It highlights the main features and functionalities."}
        </p>

        {/* Technologies */}
        <div className="mt-6">
          <h1 className="font-semibold text-lg mb-2">Technologies Used</h1>
          <div className="flex flex-wrap gap-2">
            {obj?.technologies?.map((tech, index) => (
              <TechButton
                key={index}
                imgSrc={tech.imgSrc}
                techName={tech.techName}
              />
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <LinkButton
            link={obj?.link}
            icon={obj?.linkIcon}
            name={"Website"}
          />
          <LinkButton link={obj?.github} icon={obj?.githubIcon} />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
