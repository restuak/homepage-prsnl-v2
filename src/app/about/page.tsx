import AboutFull from "./components/aboutfull";
import Navbar from "@/components/navbar";
import AboutDesc from "./components/aboutdesc";
import Footer from "@/components/footer";
export default function AboutView() {
  return (
    <main className="bg-black">
      <div id="home" className="">
        <Navbar />
        <AboutFull />
        <AboutDesc />
        <Footer />
      </div>
    </main>
  );
}
