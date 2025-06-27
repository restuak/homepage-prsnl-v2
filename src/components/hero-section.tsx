import { RiArrowDownSLine } from "react-icons/ri";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import React from "react";
import { cubicBezier } from "framer-motion";

export default function Hello() {
  return (
    <>
      <ShootingStars />
      <StarsBackground />
      <div className="h-screen flex flex-col justify-center max-w-screen-xl px-6 md:px-10 mx-auto">
        <div>
          <div className="font-bold">
            <h1>
              <span className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl  animate-fade animate-once animate-delay-100">
                Hi, I&apos;m Restu
              </span>
              <span className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl animate-bounce inline-block origin-[70%_70%] [animation-delay:0ms] ">
                🌻
              </span>

              <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-200 animate-fade-right delay-1000 ">
                <p className="mt-6">A Geoinformatician </p>
              </span>
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl animate-fade-right delay-500">
                <p>focus on my skills in</p>
              </span>
              <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-200 opacity-30 animate-fade-right delay-1000">
                <p>Full-Stack Developer </p>
              </span>
              <span>
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl animate-fade-right delay-500">
                  <p>and</p>
                </span>
                <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-200 animate-fade-right delay-1000">
                  <p>Web-based GIS Developer</p>
                </span>
              </span>
            </h1>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden"
          onClick={() =>
            lenis &&
            lenis.scrollTo("#about", {
              offset: -100,
              easing: cubicBezier(0.65, 0, 0.35, 1),
              duration: 1,
            })
          }
        >
          <div
            className="z-20 flex flex-col items-center cursor-pointer"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-delay="2800"
            data-aos-offset="0"
          >
            <span className="animate-bounce text-3xl">
              <RiArrowDownSLine />
            </span>
            <span className="font-medium font-semibold">SCROLL</span>
          </div>
        </div>
      </div>
    </>
  );
}
