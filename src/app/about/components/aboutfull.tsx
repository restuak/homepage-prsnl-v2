import GridDistortion from "./griddistortion";
import ScrollVelocity from "../block/TextAnimations/ScrollVelocity/ScrollVelocity";

export default function AboutFull() {
    return (
      <main className="bg-white">
        <div className="h-screen">
          <div className="absolute top-140 w-full items-center justify-center text-center">
            <ScrollVelocity
              texts={["restuaka","fullstackdeveloper"]}
              velocity={180}
              className="bg-none text-cyan-600 text-9xl tracking-widest font-light"
            />
          </div>
          <div style={{}}>
            <GridDistortion
              imageSrc="../restuaka.jpg"
              // grid={250}
              // mouse={0.1}
              // strength={0.1}
              // relaxation={0.9}
              className="h-screen w-full"
            />
          </div>
        </div>
      </main>
    );
    }

