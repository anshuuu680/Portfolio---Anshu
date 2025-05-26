import React from 'react';

function Skills({ imgSrc, techName }) {
  return (
    <div className="w-28 h-28 rounded-2xl shadow-inner border border-gray-800 bg-[linear-gradient(135deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.02))] flex flex-col items-center justify-center gap-2 transition duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm">
      {imgSrc}
      <h1 className="font-semibold text-white text-sm">{techName}</h1>
    </div>
  );
}

export default Skills;
