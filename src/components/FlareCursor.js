"use client";
import React, { useState, useEffect } from "react";

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      setIsMobile(
        /android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent)
      );
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Event handler for mouse movement
  const handleMouseMove = (e) => {
    if (isMobile) return; // Disable cursor on mobile devices

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
    if (isMobile) return; // Stop event listeners if mobile

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Adjust styles based on state
  const flareSize = isButton ? 50 : isPointer ? 0 : 30; // Bigger size on button hover
  const cursorColor = isButton
    ? "rgba(255, 255, 255, 0)" // More transparent white when hovering over a button
    : "rgba(255, 255, 255, 1)"; // More transparent white normally

  const blurEffect = isButton ? "0px" : "12px"; // More blur when hovering over buttons

  if (isMobile) return null; // Do not render the component on mobile devices

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
