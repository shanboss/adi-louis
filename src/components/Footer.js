"use client";
import Link from "next/link";
const buttons = [
  {
    label: "Music",
    link: "/",
  },
  {
    label: "Photos",
    link: "/photos",
  },
  {
    label: "Upcoming Shows",
    link: "/",
  },
  {
    label: "Contact",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full rounded-full text-white text-center py-4 backdrop-blur-md z-10">
      <div className="flex flex-row items-center justify-center gap-x-[5rem]">
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
