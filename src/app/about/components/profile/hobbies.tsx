"use client";

import { motion } from "framer-motion";
export default function Hobbies() {
  return (
    <section className="bg-[#000000]">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="flex flex-col items-center ">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-8 pb-5 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-300"
          >
            HOBBIES
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-0 pl-9 pr-9 pb-0 mx-auto text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center-safe text-zinc-600 "
          >
            <p className="pb-3 text-justify lg:text-center xl:text-center">
              I have many hobbies, but I am particularly passionate about two
              activities:{" "}
              <span className="font-bold text-zinc-500 hover:underline">
                cycling every day and writing essays.{" "}
              </span>
              While I am unsure how to showcase my daily cycling activities on
              this website (fetching Strava API? Hahaha, maybe sometime). In
              this section, I will share some of my written works, including{" "}
              <span className="font-bold text-zinc-500 hover:underline">
                essays about music and occasionally social topics.{" "}
              </span>
            </p>
          </motion.span>
        </div>
      </div>
    </section>
  );
}
