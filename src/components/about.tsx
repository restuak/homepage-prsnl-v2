import Image from "next/image";
export default function About() {
  return (
    <section className="bg-[#10090b]">
      <div className="h-screen max-w-screen-xl pt-6 mx-auto">
        <div className="flex flex-col items-center ">
          <p className="p-10 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-yellow-200">
            LITTLE BIT OF ME
          </p>
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={275}
            height={275}
            className="rounded-full mt-10 mb-4 border-b-yellow-200"
          />
          <p className="m-6 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center">
            I’m a Geodetic & Geomatics Engineer (Geoinformatician). Lifelong
            Learner.
          </p>
          <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center">
            Now, I focus on my learning in Full-Stack Website Developer for
            support my skill in Geographic Information System (GIS) Developer to
            build Web-based Geographic Information System (GIS). Cheers. 🌻
          </p>
          <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center">
            I have an interest in hobbies such as writing essays on music and
            social topics.
          </p>
          <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center">
            Simply, I am a Geoinformatician with a passion for Web-based GIS and
            Full-Stack Developer and have hobbies in writing essays.
          </p>
        </div>
      </div>
    </section>
  );
}