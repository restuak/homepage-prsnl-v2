"use client"
import { BsPersonWorkspace } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExpTimeline() {
  return (
    <section className="bg-[#000000] ">
      <div className=" h-screen w-full ">
        <div className="flex flex-col items-center pt-[5%]">
          <p className="p-10 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-200">
            WORKS
          </p>
          <p className="m-6 mt-0 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-600">
            I have been working in the field of Geoinformatics and Web-based GIS
            for several years, focusing on Full-Stack Development and Geographic
            Information System (GIS) development.
          </p>
          <div className="h-max w-[100%]">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2011 - present"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  CREATIVE DIRECTOR
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2011 - present"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  CREATIVE DIRECTOR
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2011 - present"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  CREATIVE DIRECTOR
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2011 - present"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  CREATIVE DIRECTOR
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
