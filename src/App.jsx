import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  });

  return (
    <>
      <main>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection />
            <MessageSection />
            <FlavorSection />
            <div className="h-[500px]"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
