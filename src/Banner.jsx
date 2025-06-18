import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "./assets/img/banner/me_tokyonight.webp";
import brand_banner from "./assets/img/banner/Obrand_banner.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BackgroundGradient } from "@/components/ui/background-gradient";

function Banner() {
  const [text] = useTypewriter({
    words: ["Full-Stack", "Back-End", "Front-End", "Software"],
    loop: {},
    typeSpeed: 180,
    delaySpeed: 800,
    deleteSpeed: 100,
  });

  return (
    <div
      id="Banner"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-left gap-5 flex lg:flex-row flex-col-reverse justify-between items-center"
    >
      <div
        translate="no"
        className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-tertiary"
      >
        <div className="w-full h-full flex justify-center lg:justify-start mb-8">
          <img
            src={brand_banner}
            width={450}
            height={450}
            className="p-1"
            alt="Cristian Vellio"
          />
        </div>
        <h1
          className="text-[52px] text-center w-full font-tilt font-semibold mb-8 leading-normal uppercase"
          style={{ maxWidth: "100%" }}
        >
          <span className="sr-only">Cristian Vellio -</span>
          {text}
          <span className="text-tertiary">
            <Cursor cursorStyle="|" />
          </span>
          <br></br>
          <span className="text-tertiary"> Developer</span>
        </h1>
        <p
          className="text-[25px] flex font-orbitron justify-center items-center flex-wrap text-center w-full font-semibold mb-8 leading-tight uppercase px-4 text-balance text-primary"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          HTML | CSS | JavaScript <br></br> React | Python | Java
        </p>
        <div className="flex mt-8 gap-4 justify-center lg:justify-center w-full">
          <a
            href="https://www.github.com/CristianVellio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary rounded-full glow p-2"
          >
            <FaGithub className="text-[48px]" />
            <span className="sr-only">Go to GitHub profile</span>
          </a>
          <a
            href="https://www.linkedin.com/in/cristianvellio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary rounded-full glow p-2"
          >
            <FaLinkedinIn className="text-[48px]" />
            <span className="sr-only">Go to LinkedIn profile</span>
          </a>
        </div>
      </div>
      <div className="w-full h-full flex justify-center lg:justify-end mb-8 p-1 ml-4">
        <BackgroundGradient className="rounded-[22px]">
          <img
            src={img}
            width={290}
            height={290}
            className="rounded-[22px]"
            alt="Cristian Vellio"
          />
        </BackgroundGradient>
      </div>
    </div>
  );
}

export default Banner;
