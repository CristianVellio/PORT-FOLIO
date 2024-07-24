import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          (
          <InfinitySpin
            visible={true}
            height={200}
            width={200}
            radius={5}
            color="#84cc16"
            ariaLabel="infinity-spin-loading"
          />
          )
        </div>
      ) : (
        <div className="bg-slate-900">
          <Nav />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
