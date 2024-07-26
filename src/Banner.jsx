import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "./assets/ME_CARTOON.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  const [text] = useTypewriter({
    words: ["Full-Stack", "Python", "Software"],
    loop: {},
    typeSpeed: 180,
    delaySpeed: 800,
    deleteSpeed: 100,
  });

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="Banner"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-left gap-5 flex lg:flex-row flex-col-reverse justify-between items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] text-center w-full font-semibold mb-8 leading-normal uppercase"
          style={{ maxWidth: "100%" }}
        >
          Cristian Vellio
          <br />
          <span className="text-lime-500">{text}</span>
          <span className="text-lime-500">
            <Cursor cursorStyle="|" />
          </span>
          <br />
          <span className="text-lime-500"> Developer</span>
        </h1>
        <p
          data-aos="fade-left"
          className="text-[30px] text-center w-full font-semibold mb-8 leading-normal uppercase"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          HTML | CSS | JavaScript <br></br> React | Python
        </p>
        <div className="flex mt-8 gap-4 justify-center lg:justify-center w-full">
          <a
            href="https://www.github.com/CristianVellio"
            className="text-lime-600 hover:text-lime-500 rounded-full glow p-2"
          >
            <FaGithub className="text-[48px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/cristianvellio"
            className="text-lime-600 hover:text-lime-500 rounded-full glow p-2"
          >
            <FaLinkedinIn className="text-[48px]" />
          </a>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-lime-500 img_glow"
        alt="Cristian Vellio"
      />
    </div>
  );
}

export default Banner;
