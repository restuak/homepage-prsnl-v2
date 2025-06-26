export default function Loading() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-2 sm:gap-4">
          <h1 className="text-xl md:text-3xl font-semibold text-red-200 opacity-0 animate-fade-up-then-out">
            Welcome to |{" "}
          </h1>
          <h1 className="text-xl md:text-3xl font-semibold opacity-0 animate-fade-up-then-out delay-50">
            My
          </h1>
          <h1 className="text-xl md:text-3xl font-semibold text-red-200 opacity-0 animate-fade-up-then-out delay-50">
            Portofolio
          </h1>
        </div>
      </div>
    );
}
