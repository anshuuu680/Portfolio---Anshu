import React from 'react';

function TechButton({ imgSrc, techName }) {
  return (
    <div className="w-fit h-fit  rounded-2xl px-3 py-2 shadow-inner border border-gray-600 bg-[linear-gradient(135deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.02))] flex  items-center justify-center gap-2 transition duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm">
      {imgSrc}
      <h1 className="font-semibold text-white md:text-[0.8vmax] text-[1.2vmax]">{techName}</h1>
    </div>
  );
}

export default TechButton;
