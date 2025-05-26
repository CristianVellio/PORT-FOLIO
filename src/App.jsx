import { useRef, useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import { FaArrowUp } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function App() {
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("Banner").offsetHeight;
      setShowButton(window.scrollY > bannerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* BACKGROUND BEAMS */}
      <div className="fixed top-0 left-0 h-screen w-full z-10 pointer-events-none">
        <BackgroundBeamsWithCollision
          className="h-screen bg-transparent"
          containerRef={footerRef}
        />
      </div>

      <div className="relative z-10">
        <Nav />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer ref={footerRef} />

        {showButton && (
          <button
            className="neno-button shadow-xl hover:primary/50 text-white border-2 border-tertiary bg-secondary hover:bg-secondary rounded-full font-bold py-1 px-1.5 my-3 fixed right-5 bottom-5 b_glow text-xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="top-button text-[30px]" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
