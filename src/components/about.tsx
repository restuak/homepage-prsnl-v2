
export default function About() {
  return (
    <section className="bg-[#10101b]">
      <div className="h-screen flex flex-col justify-center max-w-screen-xl px-6 md:px-10 mx-auto ">
        <div className="font-bold">
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl">
            About Me
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            I am a Geoinformatician with a passion for Full-Stack Development
            and Web-based GIS.
          </p>
        </div>
      </div>
    </section>
  );
}