import img1 from "./assets/ENCRYPTADOR_ORACLE.jpg";
import img2 from "./assets/WEATHER_IOT.png";
import img3 from "./assets/BOOKSTORE_FS.png";
import img4 from "./assets/CONVERSOR.png";
import img5 from "./assets/TRANSPORTES_X.jpg";
import img6 from "./assets/TOONME.png";
import { FaReact, FaJava, FaPython, FaHtml5 } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      img: img3,
      title: "Bookstore App Fullstack",
      link: "https://proyecto-libreria.vercel.app/",
      icon: <FaReact />,
    },
    {
      img: img6,
      title: "Portfolio",
      link: "https://github.com/CristianVellio/PORT-FOLIO",
      icon: <FaReact />,
    },
    {
      img: img2,
      title: "Weather Project IoT",
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
      img: img1,
      title: "Text Encrypter",
      link: "https://encrypter-oracle-one.vercel.app/",
      icon: <FaHtml5 />,
    },
    {
      img: img5,
      title: "Transport Site",
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
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-lime-600"
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
            {/* Imagen del proyecto */}
            <img
              data-aos="fade-up"
              height={500}
              width={300}
              className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
              src={project.img}
              alt={project.title}
            />
            {/* Contenedor del overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <div className="text-6xl text-lime-600 rounded-3xl mb-2 glow p-1">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
