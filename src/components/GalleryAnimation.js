"use client";

import Image from "next/image";

export default function ImageGrid() {
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
  ]; // Add more images as needed

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 scrollbar-hide mx-auto">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full aspect-square overflow-hidden rounded-lg"
        >
          <Image
            src={src}
            fill
            alt={`Image ${index + 1}`}
            className="object-cover"
            priority={index < 4} // Prioritize first few images
          />
        </div>
      ))}
    </div>
  );
}
