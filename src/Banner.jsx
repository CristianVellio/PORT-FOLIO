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
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          Cristian Vellio <br></br>
          <span className="text-lime-500">{text}</span>
          <span className="text-lime-500">
            <Cursor cursorStyle="|" />
          </span>
          <br></br>
          <span className="text-lime-500"> Developer</span>
        </h1>
        <p
          data-aos="fade-left"
          className="text-[30px] font-semibold mb-8 leading-normal text-center uppercase"
        >
          HTML | CSS | JavaScript | React | Python
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
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
