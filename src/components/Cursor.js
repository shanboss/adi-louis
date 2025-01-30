"use client";

import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
    };

    const checkHover = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", checkHover);
    document.addEventListener("mouseout", checkHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", checkHover);
      document.removeEventListener("mouseout", checkHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed rounded-full ${
        hovered ? "bg-blue-500 scale-150" : "bg-white scale-100"
      }`}
      style={{
        width: "10px", // Small, responsive cursor
        height: "10px",
        position: "fixed",
        top: "0px",
        left: "0px",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s linear",
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
