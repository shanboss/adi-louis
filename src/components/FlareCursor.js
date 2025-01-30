"use client";
import React, { useState, useEffect } from "react";

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isButton, setIsButton] = useState(false);

  // Event handler for mouse movement
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;
    const computedStyle = window.getComputedStyle(target);
    const isOverPointer =
      computedStyle.getPropertyValue("cursor") === "pointer";
    const isOverButton = target.tagName === "BUTTON";

    setIsPointer(isOverPointer);
    setIsButton(isOverButton);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Adjust styles based on state
  const flareSize = isButton ? 50 : isPointer ? 0 : 30; // Bigger size on button hover
  const cursorColor = isButton
    ? "rgba(255, 255, 255, 0)" // More transparent white when hovering over a button
    : "rgba(255, 255, 255, 1)"; // Even more transparent white normally

  const blurEffect = isButton ? "0px" : "12px"; // More blur when hovering over buttons

  return (
    <div
      className="fixed rounded-full pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        backgroundColor: cursorColor,
        backdropFilter: `blur(${blurEffect})`,
        transform: "translate(-50%, -50%)",
        transition:
          "width 0.15s ease-out, height 0.15s ease-out, background-color 0.15s ease-out",
        zIndex: 9999,
      }}
    />
  );
}

export default FlareCursor;
