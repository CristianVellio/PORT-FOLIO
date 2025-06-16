import React, { useRef, useEffect, useState, Suspense, lazy } from "react";
const About = React.lazy(() => import("./About"));
const Banner = lazy(() => import("./Banner"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const Nav = lazy(() => import("./Nav"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Certifications = lazy(() => import("./Certifications"));
import { FaArrowUp } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function App() {
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("Banner");
      const bannerHeight = banner?.offsetHeight || 0;
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
        <Suspense
          fallback={
            <div className="w-full py-20 text-center text-sm text-secondary animate-pulse">
              Loading section...
            </div>
          }
        >
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer ref={footerRef} />
        </Suspense>

        {showButton && (
          <button
            className="neno-button shadow-xl hover:primary/50 text-white border-2 border-tertiary bg-secondary hover:bg-secondary rounded-full font-tilt font-bold py-1 px-1.5 my-3 fixed right-5 bottom-5 text-sm z-10"
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
