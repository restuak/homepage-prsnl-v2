import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from "motion/react";
import Image from "next/image";
import  Link from "next/link";

export default function Experience() {
  return (
    <main className="bg-[#09090b]">
    <div className="" id="experience">
      <div className=" p-10 relative flex flex-col = items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{
            type: "spring",
          }}
          className="w-full h-64 lg:w-1/2 lg:h-auto"
        >
          <Image
            src="/1.jpg"
            alt="About Image"
            width={800}
            height={600}
            className="object-cover w-full h-full rounded-lg shadow-lg md:rounded-none md:shadow-none lg:rounded-lg lg:shadow-lg xl:rounded-none xl:shadow-none"
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
              MY EXPERIENCE
            </h2>
            <p className="mt-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-8">
              <Link
                href="/experience"
                className="rounded-4xl inline-block w-full text-center text-lg font-medium text-white bg-cyan-600  py-4 px-10 hover:bg-cyan-400 hover:shadow-md md:w-48"
              >
                My Experience
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </main>
    // <VerticalTimeline>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    // </VerticalTimeline>
  );
}
