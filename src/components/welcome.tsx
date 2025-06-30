import { RiArrowDownWideFill } from "react-icons/ri";
import React from "react";

export default function Welcome() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-center px-6 md:px-10 mx-auto">
        <div>
          <div className="font-bold ">
            <h1>
              <span className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl animate-fade animate-once animate-delay-120 text-white">
                Hi, I&apos;m Restu
              </span>
              <span className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl animate-bounce inline-block origin-[70%_70%]">
                🌻
              </span>
              <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-200">
                <p className="mt-6 animate-fade-right animate-once animate-delay-1000 animate-ease-in-out">
                  A Geoinformatician{" "}
                </p>
              </span>
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
                <p className="animate-fade-right animate-once animate-delay-500 animate-ease-in-out">
                  focus on my skills in
                </p>
              </span>
              <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-200">
                <p className="animate-fade-right animate-once animate-delay-1000 animate-ease-in-out">
                  Full-Stack Developer{" "}
                </p>
              </span>
              <span>
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
                  <p className="animate-fade-right animate-once animate-delay-500 animate-ease-in-out">
                    and
                  </p>
                </span>
                <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-200">
                  <p className="animate-fade-right animate-once animate-delay-1000 animate-ease-in-out">
                    Web-based GIS Developer
                  </p>
                </span>
              </span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden">
          <div className="animate-fade-up animate-once animate-delay-2000 animate-ease-out z-20 flex flex-col items-center cursor-pointer">
            <span className="animate-bounce text-4xl text-bold ">
              <RiArrowDownWideFill />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
