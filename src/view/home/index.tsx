"use client";
import Welcome from "@/components/welcome";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Essays from "@/components/essays";
import Contact from "@/components/contact";

export default function HomeView() {
  return (
    <main className="bg-[url(/bg.svg)] bg-cover bg-no-repeat bg-center h-screen bg-[#10090b]">
      <div id="home" className="">
        <Navbar />
        <Welcome />
        <About />
        <Experience />
        <Skill />
        <Essays />
        <Contact />
      </div>
    </main>
  );
}
