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
          <div className="leading-tight font-bold animate-dimmed">
            <h1>
              <span className="opacity-30 animate-dimmed [animation-delay:1400ms]">
                <span className="animate-hand-wave inline-block origin-[70%_70%] [animation-delay:2700ms] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                  👋
                </span>

                <span></span>
                <span className=" opacity-30 animate-dimmed delay-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                  Hi, I&apos;m
                </span>
                <span className="text-red-400 opacity-30 animate-dimmed delay-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                  <p>Geo-informatician</p>
                </span>
              </span>
              <span className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl opacity-30 animate-dimmed [animation-delay:1700ms]">
                <p>I focus on my skills in</p>
              </span>
              <span
                url="#technologies"
                imageSrc="images/technologies.jpeg"
                isStatic
              >
                <span className="text-red-200 opacity-30 animate-dimmed [animation-delay:800ms] text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl">
                  <p>Full-Stack Developer</p>
                </span>
              </span>
              <span>
                <span className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl opacity-30 animate-dimmed [animation-delay:1700ms]">
                  <p>and or</p>
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-yellow-200 opacity-30 animate-dimmed [animation-delay:1100ms]">
                  <p>Web-based Geographic Information System (GIS) Developer</p>
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
