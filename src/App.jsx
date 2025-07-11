import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-[500px]"></div>
    </>
  );
}

export default App;
