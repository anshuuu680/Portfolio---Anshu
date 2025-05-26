import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
        pointerEvents: "none",
      }}
      className={`fixed z-50 w-8 h-8 rounded-full border-2 border-white bg-white/10 backdrop-blur-md transition-opacity duration-200 -translate-x-1/2 -translate-y-1/2`}
      id="custom-cursor"
    />
  );
};

export default Cursor;
