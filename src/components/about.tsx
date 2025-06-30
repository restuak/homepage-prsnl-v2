import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#09090b] " id="about">
      <div className=" p-10 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{
            type: "false",
          }}
          className="w-full h-64 lg:w-1/2 lg:h-auto"
        >
          <Image
            src="/1.jpg"
            alt="About Image"
            width={800}
            height={600}
            className="w-full h-full rounded-lg shadow-lg md:rounded-none md:shadow-none lg:rounded-lg lg:shadow-lg xl:rounded-none xl:shadow-none"
          />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{
            type: "spring",
          }}
          className="max-w-lg rounded-4xl bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
        >
          <div className="flex flex-col p-12 md:px-16 ">
            <h2 className="text-2xl font-medium uppercase text-cyan-600 lg:text-4xl ">
              LITTLE BIT ABOUT ME
            </h2>
            <p className="mt-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="rounded-4xl inline-block w-full text-center text-lg font-medium text-white bg-cyan-600  py-4 px-10 hover:bg-cyan-400 hover:shadow-md md:w-48"
              >
                Let's Me Show
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
