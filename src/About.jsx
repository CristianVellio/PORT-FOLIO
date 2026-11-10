import img from "./assets/img/about/Ome.webp";
import Cristian_Vellio_Developer from "./assets/pdf/Cristian_Vellio_Developer.pdf";
import Cristian_Vellio_Desarrollador from "./assets/pdf/Cristian_Vellio_Desarrollador.pdf";
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
          I’m a Software Developer with a passion for turning complex ideas into
          intuitive, high-impact digital experiences. With a solid foundation in
          full-stack engineering (Java / Spring Boot, Python / Django REST,
          TypeScript, Angular, React), I design and build applications that are
          as structurally sound as they are thoughtful. <br />
          My technical background includes a Full-Stack Web Development diploma
          from UTN-BA and advanced studies in Software Development at ISPC
          (graduating December 2026). Equally important are my foundational
          studies in Arts and Literature; they deeply influence my creative
          problem-solving, attention to user experience, and technical
          communication. <br /> I strongly advocate for clean architecture,
          automated testing, continuous learning, and clear collaboration. Every
          challenge is an opportunity to craft better software and grow
          alongside great teams. <br /> Thanks for stopping by; feel free to
          explore my work or reach out to discuss how we can build something
          great together.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
            <button className="neno-button shadow-xl hover:shadow-secondary/50  text-white border-2 hover:bg-secondary border-tertiary rounded-lg py-4 px-8 uppercase font-tilt relative overflow-hidden ">
              <a
                href={Cristian_Vellio_Developer}
                download="Cristian_Vellio_Developer"
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
                href={Cristian_Vellio_Desarrollador}
                download="Cristian_Vellio_Desarrollador"
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
