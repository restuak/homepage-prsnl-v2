import { IoIosArrowDown } from "react-icons/io";
import { Albert_Sans } from "next/font/google";
import Image from "next/image";
const ASans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
export default function Welcome() {
  return (
    <main
      id="main"
      className=" h-screen max-w-screen-xl flex flex-col justify-center px-6 md:px-10 mx-auto"
    >
      <div className="font-bold ">
        <Image
          src="/lcp.jpg"
          alt="Hidden but LCP"
          fill
          sizes="100vw"
          priority
          className="opacity-0 pointer-events-none absolute top-0 left-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <h1
          className={`${ASans.className}  font-semibold tracking-tight hover:text-zinc-600 hover: first:mt-0 text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl animate-fade animate-once  text-zinc-100`}
        >
          I&apos;M RESTU AKA
        </h1>
        <span className="text-2xl pt-5 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 ">
          <p
            className="pt-13 animate-fade-right animate-once animate-delay-800 animate-ease-in-out"
            data-speed="1.5"
          >
            a{" "}
            <span className="text-zinc-400 hover:text-zinc-600">
              geoinformatician
            </span>
          </p>
        </span>
        <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 ">
          <p
            className="animate-fade-right animate-once animate-delay-300 animate-ease-in-out"
            data-speed="1.5"
          >
            with passion in
          </p>
        </span>
        <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600  ">
          <p
            className="animate-fade-right animate-once animate-delay-800 animate-ease-in-out"
            data-speed="1.5"
          >
            <span className="text-zinc-400 hover:text-zinc-600">
              fullstack developer
            </span>
          </p>
        </span>
        <span>
          <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 ">
            <p className="animate-fade-right animate-once animate-delay-500 animate-ease-in-out">
              for build
            </p>
          </span>
          <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600  ">
            <p className="animate-fade-right animate-once animate-delay-800 animate-ease-in-out ">
              <span className="text-zinc-400 hover:text-zinc-600">
                web map{" "}
              </span>
              based{" "}
              <span className="text-zinc-400 hover:text-zinc-600">gis</span>
            </p>
          </span>
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden">
        <div className="animate-fade-up animate-once animate-delay-1500 animate-ease-out z-20 flex flex-col items-center cursor-pointer">
          <span className="animate-bounce text-4xl text-bold text-zinc-600">
            <a href="#about" aria-label="Scroll down">
              <IoIosArrowDown />
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
