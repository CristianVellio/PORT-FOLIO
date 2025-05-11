import img from "./assets/me.jpg";
import CRISTIAN_VELLIO_RESUME from "./assets/CRISTIAN_VELLIO_RESUME.pdf";
import CRISTIAN_VELLIO_CURRICULUM from "./assets/CRISTIAN_VELLIO_CURRICULUM.pdf";

function About() {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-20 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-tertiary img_glow"
        alt="Cristian Vellio"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-white">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-secondary uppercase"
        >
          About Me
        </h2>
        <p data-aos="fade-left" className="text-align: justify;">
          I am a Software Developer with a solid foundation in full-stack web
          development. I graduated from the Full-Stack Web Developer program at
          the National University of Technology, Buenos Aires (UTN-BA), and I’m
          currently pursuing a Bachelor’s in Software Development at the Higher
          Polytechnic Institute of Córdoba (ISPC), where I am a sophomore in my
          third semester. Additionally, I hold an Associate’s Programmer degree,
          specializing in Python, from the ISPC. <br /> My diverse background
          includes a high school diploma in Arts, Communications, and Design,
          and I previously pursued a master in Modern Literature. These
          experiences have enriched my creative problem-solving skills, which I
          now apply in the IT and programming world. My passion for technology
          began early: I completed my first Junior PC Operator course at age 12,
          even without owning a computer at the time. <br /> I am a
          self-motivated and empathetic individual who thrives in collaborative
          environments. I enjoy learning from others, sharing knowledge, and
          tackling challenges head-on. My journey reflects my deep enthusiasm
          for the IT field and my pride in evolving into a dedicated Developer.
          <br />I look forward to potential collaborations or working with you
          in the future.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
            <button className="neno-button shadow-xl hover:shadow-secondary/50  text-white border-2 hover:bg-secondary border-tertiary rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
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
            <button className="neno-button shadow-xl hover:shadow-secondary/50  text-white border-2 hover:bg-secondary border-tertiary rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
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
