import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="h-dvh border border-red-600"></div>
    </>
  );
}

export default App;
