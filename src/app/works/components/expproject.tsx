"use client";
import ScrollUp from "@/components/animate/scrollup";
import FooterIn from "@/components/footerin";
// import ModalExp from "./modalexp";
import { Button } from "@/components/ui/button";
import { projectDetail } from "./projectstatic";
import ProjectCardCard from "./cardproject";

export default function ExpProject() {
  return (
    <main className="bg-black" id="project">
      <div className="h-100% max-w-screen-xl pt-5 mx-auto">
        <div className="container p-5 flex flex-col items-center pt-[5%]">
          <p className="p-5 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-200">
            PROJECTS
          </p>
          <p className=" m-6 mt-0 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-600">
            These are some projects that I have worked on, most of which are Web
            App Map based Geographic Information System (GIS)
          </p>
        </div>

        <div className="container pt-0 pb-20 flex flex-wrap justify-center gap-10">
          <div className="flex flex-wrap gap-10 justify-center py-5">
            {projectDetail.map((card) => (
              <ProjectCardCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        <FooterIn />
      </div>
      <ScrollUp />
    </main>
  );
}
