"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const DotWave = () => {
  const [gridSize, setGridSize] = useState(30); // Default grid size
  const [gridRows, setGridRows] = useState(10);
  const [key, setKey] = useState(0); // Force re-render key

  // Dynamically update grid size based on screen width
  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth;
      let newGridSize = 30; // Default large screen
      let newRowSize = 10;
      if (width < 640) (newGridSize = 10), (newRowSize = 7); // Small screens
      else if (width < 1024) (newGridSize = 20), (newRowSize = 10); // Medium screens

      if (newGridSize !== gridSize) {
        setGridSize(newGridSize);
        setGridRows(newRowSize);
        setKey((prev) => prev + 1); // Increment key to force re-render
      }
    };

    updateGridSize(); // Initial call
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, [gridSize]);

  const centerX = Math.floor(gridSize / 2);
  const centerY = Math.floor(gridSize / 2);

  return (
    <div
      key={key} // Triggers re-render when gridSize changes
      className="grid fixed left-0 w-full h-full"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        gap: "5px",
        placeItems: "center",
      }}
    >
      {Array.from({ length: gridSize * gridRows }).map((_, i) => {
        const x = i % gridSize;
        const y = Math.floor(i / gridRows);

        // Calculate distance from center
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

        return (
          <motion.div
            key={i}
            className="w-full aspect-square rounded-full bg-purple-500"
            animate={{
              scale: [0.3, 1, 0.3], // Growing and shrinking effect
              backgroundColor: ["#6B46C1", "#FF0080", "#00F5D4", "#6B46C1"], // Color cycle
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: distance * 0.1, // Delay based on distance from center
            }}
          />
        );
      })}
    </div>
  );
};

export default DotWave;
