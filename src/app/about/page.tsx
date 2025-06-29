import AboutFull from "./components/aboutfull";
import Navbar from "@/components/navbar";
export default function AboutView() {
  return (
    
    <main className="bg-cover bg-no-repeat bg-center h-screen bg-white">
      <div id="home" className="">
        <Navbar/>
        <AboutFull />
      </div>
    </main>
  );
}
