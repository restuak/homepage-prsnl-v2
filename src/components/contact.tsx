"use client";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <main id="contact" className="">
      <div className="flex flex-col items-center  ">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.5 },
                  opacity: { delay: 0.6 },
                }}
                className="mb-5 text-5xl font-bold"
              >
                LET'S CONNECT
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.5 },
                  opacity: { delay: 0.6 },
                }}
                className="mb-5"
              >
                GET IN TOUCH GUYS!
              </motion.p>
              <div className="flex flex-row justify-center items-center m-5">
                <motion.a
                  href="https://github.com/restuak"
                  target="_blank"
                  rel="Github"
                  className="m-3 flex justify-center items-center bg-zinc-500 w-20 h-20 rounded-full text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { delay: 0.5 },
                    opacity: { delay: 0.6 },
                  }}
                >
                  <FaGithub className="w-14 h-14 zinc-200" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/restuaka"
                  target="_blank"
                  rel="Instagram"
                  className="m-3 flex justify-center items-center bg-zinc-500 w-20 h-20 rounded-full text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { delay: 0.5 },
                    opacity: { delay: 0.6 },
                  }}
                >
                  <FaInstagram className="w-14 h-14 zinc-200" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/restuak/"
                  target="_blank"
                  rel="LinkedIn"
                  className="m-3 flex justify-center items-center bg-zinc-500 w-20 h-20 rounded-full text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    y: { delay: 0.5 },
                    opacity: { delay: 0.6 },
                  }}
                >
                  <FaLinkedin className="w-14 h-14 zinc-200" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
