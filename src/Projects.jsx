import img1 from "./assets/ENCRYPTADOR_ORACLE.jpg";
import img2 from "./assets/WEATHER_IOT.png";
import img3 from "./assets/BOOKSTORE_FS.png";
import img4 from "./assets/CONVERSOR.png";
import img5 from "./assets/TRANSPORTES_X.jpg";
import img6 from "./assets/TOONME.png";

function Projects() {
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
        <a
          href="https://proyecto-libreria.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-down"
            height={500}
            width={300}
            className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img3}
            alt="Bookstore App Fullstack"
          />
        </a>
        <a
          href="https://github.com/CristianVellio/PORT-FOLIO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={300}
            width={300}
            className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img6}
            alt="Portfolio"
          />
        </a>
        <a
          href="https://proyecto-clima-azure.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-down"
            height={500}
            width={300}
            className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img2}
            alt="WEATHER PROJECT IOT"
          />
        </a>
        <a
          href="https://github.com/CristianVellio/conversor-de-moneda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={500}
            width={300}
            className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img4}
            alt="Conversor de Moneda"
          />
        </a>
        <a
          href="https://encrypter-oracle-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={500}
            width={300}
            className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img1}
            alt="Encryptador Oracle"
          />
        </a>
        <a
          href="https://transportex-x-utn-frba.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={400}
            width={300}
            className="project-image flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img5}
            alt="Transportes X"
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
