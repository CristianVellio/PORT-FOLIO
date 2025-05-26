import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import { FaArrowUp } from "react-icons/fa";
import Certifications from "./Certifications";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("Banner").offsetHeight;
      if (window.scrollY > bannerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
        {showButton && (
          <button
            className="neno-button shadow-xl hover:primary/50 text-white border-2 border-tertiary bg-secondary hover:bg-secondary rounded-full font-bold py-1 px-1.5 my-3 fixed right-5 bottom-5 b_glow text-xl text-bold"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="top-button text-[30px]" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
