import img1 from "./assets/ENCRYPTADOR_ORACLE.jpg";
import img2 from "./assets/WEATHER_IOT.png";
import img3 from "./assets/BOOKSTORE_FS.png";
import img4 from "./assets/CONVERSOR.png";
import img5 from "./assets/TRANSPORTES_X.jpg";
import img6 from "./assets/TOONME.png";
import img7 from "./assets/clinic_api.png";
import img8 from "./assets/screenmatch.png";
import img9 from "./assets/forohub.png";
import img10 from "./assets/literalura.png";
import img11 from "./assets/Bienestar_Plus_Banner.png";
import { FaReact, FaJava, FaPython, FaHtml5 } from "react-icons/fa";
import { SiAngular } from "react-icons/si";

function Projects() {
  const projects = [
    {
      img: img3,
      title: "Bookstore App Fullstack",
      link: "https://proyecto-libreria.vercel.app/",
      icon: <FaReact />,
    },
    {
      img: img11,
      title: "Bienestar Plus Fullstack",
      link: "https://github.com/ISPC-Soluciones/Bienestar-Plus",
      icon: <SiAngular />,
    },
    {
      img: img6,
      title: "Portfolio",
      link: "https://github.com/CristianVellio/PORT-FOLIO",
      icon: <FaReact />,
    },
    {
      img: img2,
      title: "Fullstack Weather Project IoT",
      link: "https://proyecto-clima-azure.vercel.app/",
      icon: <FaPython />,
    },
    {
      img: img4,
      title: "Currency Converter",
      link: "https://github.com/CristianVellio/conversor-de-moneda",
      icon: <FaJava />,
    },
    {
      img: img7,
      title: "Med Clinic Api",
      link: "https://github.com/CristianVellio/api",
      icon: <FaJava />,
    },
    {
      img: img8,
      title: "Screenmatch (BackEnd)",
      link: "https://github.com/CristianVellio/screenmatch",
      icon: <FaJava />,
    },
    {
      img: img9,
      title: "FOROHUB (BackEnd)",
      link: "https://github.com/CristianVellio/FOROHUB",
      icon: <FaJava />,
    },
    {
      img: img10,
      title: "LiterAlura (BackEnd)",
      link: "https://github.com/CristianVellio/LiterAlura",
      icon: <FaJava />,
    },
    {
      img: img1,
      title: "Text Encrypter (FrontEnd)",
      link: "https://encrypter-oracle-one.vercel.app/",
      icon: <FaHtml5 />,
    },
    {
      img: img5,
      title: "Transportation Co. (FrontEnd)",
      link: "https://transportex-x-utn-frba.netlify.app/",
      icon: <FaHtml5 />,
    },
  ];

  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-secondary"
      >
        Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img
              data-aos="fade-up"
              height={500}
              width={300}
              className="project-image flex items-center text-tertiary hover:text-secondary rounded-3xl p-1 border-2 b_glow"
              src={project.img}
              alt={project.title}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <div className="text-6xl text-secondary rounded-3xl mb-2 glow p-1">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-quaternary">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
