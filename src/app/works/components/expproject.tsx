import ScrollUp from "@/components/animate/scrollup";
export default function ExpProject() {
  return (
    <main className="bg-black">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="container p-5 flex flex-col items-center pt-[5%]">
          <p className="p-10 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-200">
            PROJECT
          </p>
        </div>
      </div>
      <ScrollUp />
    </main>
  );
}
