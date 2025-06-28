"use client";
import { useEffect, useState } from "react";
import Welcome from "@/components/welcome";
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

  return (
    <main className="">
      {isLoading ? (
        <Loading /> ) : (
        <div id="home">
          <Navbar />
          <Welcome />
        </div>
      )}
    </main>
  );
}
