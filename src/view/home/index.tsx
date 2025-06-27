"use client";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/hero-section";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 100,
      once: true,
    });
  });

  return (
    <main className="">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="" id="home">
          <Navbar />

          <HeroSection />
        </div>
      )}
    </main>
  );
}
