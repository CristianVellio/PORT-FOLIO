import img from "./assets/img/about/Ome.webp";
import CRISTIAN_VELLIO_RESUME from "./assets/pdf/CRISTIAN_VELLIO_RESUME.pdf";
import CRISTIAN_VELLIO_CURRICULUM from "./assets/pdf/CRISTIAN_VELLIO_CURRICULUM.pdf";
import { BackgroundGradient } from "@/components/ui/background-gradient";

function About() {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-20 items-center"
    >
      <div className="flex-shrink-0 flex justify-center items-center">
        <BackgroundGradient
          className="w-[290px] h-[290px] overflow-hidden"
          containerClassName="p-[3px]"
        >
          <img
            src={img}
            alt="Cristian Vellio"
            className="w-full h-full object-cover rounded-[22px]"
          />
        </BackgroundGradient>
      </div>
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-white">
        <h2 className="text-[52px] font-orbitron font-semibold mb-8 leading-normal text-secondary uppercase">
          About Me
        </h2>
        <p className="font-serrat text-justify text-lg leading-8">
          I’m a Software Developer with a love for turning ideas into
          experiences through technology. With a strong base in full-stack
          development and a background in both technical and creative fields, I
          aim to build applications that are not only functional but thoughtful.{" "}
          <br />
          My academic path includes a Full-Stack Web Developer diploma from
          UTN-BA, a Python-based Associate’s degree, and ongoing studies in
          Software Development at ISPC. But just as important are the years I
          spent exploring Arts and Literature; they shape how I think, solve
          problems, and communicate. <br /> I believe in clean code, lifelong
          learning, and collaboration over competition. Every challenge is a
          chance to grow, and I’m always excited to contribute, learn, and
          create. <br /> Thanks for stopping by. I look forward to working
          together.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
            <button className="neno-button shadow-xl hover:shadow-secondary/50  text-white border-2 hover:bg-secondary border-tertiary rounded-lg py-4 px-8 uppercase font-tilt relative overflow-hidden ">
              <a
                href={CRISTIAN_VELLIO_RESUME}
                download="CRISTIAN_VELLIO_RESUME"
              >
                Download Resume (EN)
              </a>
            </button>
          </div>
        </div>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
            <button className="neno-button shadow-xl font-tilt hover:shadow-secondary/50  text-white border-2 hover:bg-secondary border-tertiary rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
              <a
                href={CRISTIAN_VELLIO_CURRICULUM}
                download="CRISTIAN_VELLIO_CURRICULUM"
              >
                Descargar CV (ES)
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
