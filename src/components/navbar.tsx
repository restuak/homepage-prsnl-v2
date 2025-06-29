"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="animate-fade-down animate-once animate-delay-2000 animate-ease-out flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full bg-[#10090b] backdrop-blur-md z-50">
      <div className="cursor-pointer">
        <span className="text-xl md:text-2xl font-semibold tracking-wide">
          <div className="text-white ">
            <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
              <Link href="/">^_^</Link>
            </span>
          </div>
        </span>
      </div>

      <div className=" hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide ">
        <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/about">ABOUT</Link>
        </span>
        <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          EXPERIENCE
        </span>
        <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          SKILL
        </span>
        <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          ESSAYS
        </span>
        <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          CONTACT
        </span>
      </div>

      <div className="flex flex-col gap-[6px] md:hidden" onClick={toggleMenu}>
        <span
          className={`block h-[2px] w-6 bg-white ${
            isMenuOpen ? "-rotate-45 origin-center translate-y-[8px]" : ""
          } transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`block h-[2px] bg-white ${
            isMenuOpen ? "w-0" : "w-6"
          } transition-all duration-200`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-white ${
            isMenuOpen ? "rotate-45 origin-center -translate-y-[8px]" : ""
          } transition-all duration-200`}
        ></span>
      </div>

      <div
        className={`flex md:hidden flex-col gap-14 text-center absolute right-[0px] left-[0px] top-[-750px] justify-center align-text-center bg-cyan-400 pb-[140px] pt-[140px]  text-black  ${
          isMenuOpen ? "-translate-y-[-824px] " : ""
        } transition-all duration-400 ease-in-out`}
      >
        <span className="text-3xl font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          ABOUT
        </span>
        <span className="text-3xl font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          EXPERIENCE
        </span>
        <span className="text-3xl font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          SKILL
        </span>
        <span className="text-3xl font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          ESSAYS
        </span>
        <span className="text-3xl font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer">
          CONTACT
        </span>
      </div>
    </div>
  );
}
