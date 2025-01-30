"use client";

import { motion } from "motion/react";

const GRID_SIZE = 30; // Grid dimensions

const DotWave = () => {
  const centerX = Math.floor(GRID_SIZE / 2);
  const centerY = Math.floor(GRID_SIZE / 2);

  return (
    <div
      className="grid max-w-full max-h-screen fixed"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        gap: "10px",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {Array.from({ length: GRID_SIZE * 10 }).map((_, i) => {
        const x = i % GRID_SIZE;
        const y = Math.floor(i / 10);

        // Calculate the distance from the center
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

        return (
          <motion.div
            key={i}
            className="w-full aspect-square rounded-full"
            animate={{
              scale: [0.3, 1, 0.3], // Growing and shrinking effect
              backgroundColor: ["#6B46C1", "#FF0080", "#00F5D4", "#6B46C1"], // Color transition
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
