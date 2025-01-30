"use client";
import Link from "next/link";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"; // Import close icon

const buttons = [
  { label: "Music", link: "/" },
  { label: "Photos", link: "/photos" },
  { label: "Upcoming Shows", link: "/" },
  { label: "Contact", link: "/" },
];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-full bg-black/50 rounded-full text-white text-center py-4 backdrop-blur-md z-10">
      {/* Mobile: Plus Icon (Expands Menu) */}
      <button
        className="sm:hidden flex flex-col items-center justify-center mx-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-12 h-12 text-white transition-transform duration-200" />
        ) : (
          <PlusIcon className="w-12 h-12 text-white transition-transform duration-200" />
        )}
      </button>

      {/* Mobile: Expandable Buttons */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-2 mt-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.link}
              onClick={() => setIsOpen(false)}
            >
              <button className="hover:bg-neutral-800 px-6 py-2 duration-200 rounded-full text-lg font-poppins font-semibold w-full">
                {button.label}
              </button>
            </Link>
          ))}
        </div>
      )}

      {/* Desktop: Navigation Menu */}
      <div className="hidden sm:flex flex-row items-center justify-center gap-x-[5rem]">
        {buttons.map((button, index) => (
          <Link key={index} href={button.link}>
            <button className="hover:bg-neutral-800 px-4 duration-200 rounded-full py-2 text-xl font-poppins font-semibold">
              {button.label}
            </button>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
