import img from "./assets/me.jpg";

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
        className="rounded-full border-2 p-1 border-lime-500 img_glow"
        alt="Cristian Vellio"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-lime-600 uppercase"
        >
          About Me
        </h2>
        <p data-aos="fade-left">
          I’m a Full-Stack Software Developer, currently a student in the
          Bachelor’s in Technology of Software Development program at the Higher
          Polytechnic Institute of Córdoba (ISPC). Additionally, I am enrolled
          in the Full-Stack Web Developer higher education program at the
          National University of Technology, Buenos Aires Branch (UTN-BA), and a
          graduate of the Python Developer professional course at Codo a Codo,
          provided by the Buenos Aires City Government, Agencia de Aprendizaje.
          My background includes a high school diploma in Arts, Communications,
          and Design. I also attended the bachelor’s program in Modern
          Literature, which provided me with valuable tools that I can apply in
          the IT and programming world. I completed my first course as a Junior
          PC Operator at the age of 12, despite not owning a PC at home. I have
          always been passionate about the IT universe, which is why I am both
          enthusiastic and proud to have made the career leap to become a
          full-fledged Developer. I am a self-driven, empathetic, self-taught,
          and social individual who excels at working with others, learning from
          them, and sharing my knowledge. I hope we can collaborate or work
          together in the future.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
            <button className="neno-button shadow-xl hover:shadow-lime-800/50  text-white border-2 hover:bg-lime-800 border-lime-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
