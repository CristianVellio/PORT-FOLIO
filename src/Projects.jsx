import img1 from "./assets/ENCRYPTADOR_ORACLE.jpg";
import img2 from "./assets/ISPC_BROKERS.jpg";
import img3 from "./assets/JS_MOVIES.jpg";
import img4 from "./assets/LA_BAKERYA.jpg";
import img5 from "./assets/TRANSPORTES_X.jpg";
import img6 from "./assets/PORTA.jpg";

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
          href="https://encrypter-oracle-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={500}
            width={300}
            className="flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img1}
            alt="Encryptador Oracle"
          />
        </a>
        <a
          href="https://utn-js-movies.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-down"
            height={500}
            width={300}
            className="flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img3}
            alt="JS Movies"
          />
        </a>
        <a
          href="https://github.com/ISPC-Brokers/ISPC-Brokers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={500}
            width={300}
            className="flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow "
            src={img2}
            alt="ISPC Brokers"
          />
        </a>
        <a
          href="https://codo-a-codo-tp-python.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-down"
            height={500}
            width={300}
            className="flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img4}
            alt="La Bakerya"
          />
        </a>

        <a
          href="https://cristian-vellio-cv.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-up"
            height={500}
            width={300}
            className="flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img6}
            alt="Portfolio"
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
            className="flex items-center text-lime-600 hover:text-lime-500 rounded-3xl p-1 border-2 b_glow"
            src={img5}
            alt="Transportes X"
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
