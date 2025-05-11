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
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { useEffect } from "react";
import { SiAngular } from "react-icons/si";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  function ProjectCard({
    img,
    title,
    link,
    icon,
    type,
    description,
    collaborative,
  }) {
    return (
      <a
        data-aos="fade-up"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="b_glow relative group w-full bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 max-w-sm mx-auto"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-6xl text-primary mb-2 hover:text-secondary rounded-3xl p-1 b_glow">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="p-4">
          <span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full mb-2">
            {type}
          </span>
          <p className="text-gray-300 text-sm">{description}</p>
          {collaborative && (
            <span className="block text-tertiary text-xs mt-2">
              Collaborative Project
            </span>
          )}
        </div>
      </a>
    );
  }

  const projects = [
    {
      img: img11,
      title: "Bienestar Plus Fullstack",
      link: "https://github.com/ISPC-Soluciones/Bienestar-Plus",
      icon: <SiAngular />,
      type: "Fullstack",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:heart-plus-outline-rounded"
            className="text-lime-500 inline-block mr-2"
            width="24"
            height="24"
          />
          Bienestar+ is a web application focused on physical, mental, and
          emotional well-being. It allows users to manage healthy habits, access
          mental health resources, and receive personalized recommendations to
          improve their quality of life. Developed by students of the Software
          Development program with Angular and, Agile Methodologies, Scrum.
        </>
      ),
      collaborative: true,
    },
    {
      img: img3,
      title: "Bookstore App Fullstack",
      link: "https://proyecto-libreria.vercel.app/",
      icon: <FaReact />,
      type: "Fullstack",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:book-2-rounded"
            className="text-blue-800 inline-block mr-2"
            width="24"
            height="24"
          />
          The Bookstore project is a modern web platform for book management and
          sales. Designed for both end users and administrators, this
          application allows users to explore books, add them to their cart, and
          make purchases. For administrators, it provides complete CRUD
          functionalities to manage the library.
        </>
      ),
      collaborative: false,
    },
    {
      img: img2,
      title: "Weather IoT Project",
      link: "https://proyecto-clima-azure.vercel.app/",
      icon: <FaPython />,
      type: "Fullstack IoT",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:sunny-snowing"
            className="text-yellow-400 inline-block mr-2"
            width="24"
            height="24"
          />
          The Meteorological Station project is an IoT system designed to
          monitor and record real-time weather conditions. It uses a Supabase
          database to store data and an interactive frontend for visualization.
          It combines simulation, integration, and web development to offer a
          modern and scalable solution.
        </>
      ),
      collaborative: true,
    },
    {
      img: img6,
      title: "Portfolio",
      link: "https://github.com/CristianVellio/PORT-FOLIO",
      icon: <FaReact />,
      type: "Frontend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:cases"
            className="text-amber-800 inline-block mr-2"
            width="24"
            height="24"
          />
          This personal web portfolio is designed to showcase skills, projects,
          and provide a means of contact for potential employers or
          collaborators. The website is built with Vite, React, and Tailwind
          CSS, featuring a modern and responsive design, with animations that
          enhance the user experience.
        </>
      ),
      collaborative: false,
    },
    {
      img: img9,
      title: "ForoHub",
      link: "https://github.com/CristianVellio/FOROHUB",
      icon: <FaJava />,
      type: "Backend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:sound-detection-loud-sound"
            className="text-purple-400 inline-block mr-2"
            width="24"
            height="24"
          />
          ForoHub is a RESTful web application built using Spring Boot, designed
          to facilitate the creation of topics and publication of responses
          within a user-centric forum. The application includes robust security
          features, user management, and a modular design to ensure scalability
          and maintainability.
        </>
      ),
      collaborative: false,
    },
    {
      img: img7,
      title: "Med Clinic API",
      link: "https://github.com/CristianVellio/api",
      icon: <FaJava />,
      type: "API REST",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:medical-information-outline"
            className="text-red-600 inline-block mr-2"
            width="24"
            height="24"
          />
          Voll Med Clinic API is a RESTful service built with Spring Boot for
          managing clinic operations, including authentication, user management,
          and medical data handling. It uses JWT authentication for security and
          integrates with MySQL for persistent data storage.
        </>
      ),
      collaborative: false,
    },
    {
      img: img8,
      title: "Screenmatch",
      link: "https://github.com/CristianVellio/screenmatch",
      icon: <FaJava />,
      type: "Backend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:video-camera-back"
            className="text-yellow-200 inline-block mr-2"
            width="24"
            height="24"
          />
          Screenmatch is a Spring Boot-based Java application designed as an
          introductory project for working with the framework. It leverages
          several key technologies.
        </>
      ),
      collaborative: false,
    },
    {
      img: img10,
      title: "LiterAlura",
      link: "https://github.com/CristianVellio/LiterAlura",
      icon: <FaJava />,
      type: "Backend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:book-3"
            className="text-blue-700 inline-block mr-2"
            width="24"
            height="24"
          />
          LiterAlura is a book management application developed in Java with
          Spring Boot. It allows you to manage a digital library with
          information about books, authors, and languages.
        </>
      ),
      collaborative: false,
    },
    {
      img: img4,
      title: "Currency Converter",
      link: "https://github.com/CristianVellio/conversor-de-moneda",
      icon: <FaJava />,
      type: "Backend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:money-bag"
            className="text-amber-500 inline-block mr-2"
            width="24"
            height="24"
          />
          The Currency Converter is an application designed to perform currency
          conversions in a simple and efficient way. The project allows
          conversion between different currencies using up-to-date data provided
          by a third-party API.
        </>
      ),
      collaborative: false,
    },
    {
      img: img1,
      title: "Text Encryptor",
      link: "https://encrypter-oracle-one.vercel.app/",
      icon: <FaHtml5 />,
      type: "Frontend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:encrypted"
            className="text-white inline-block mr-2"
            width="24"
            height="24"
          />
          Solo challenge creating an application that encrypts texts, so you can
          exchange secret messages with other people who know the encryption key
          used.
        </>
      ),
      collaborative: false,
    },
    {
      img: img5,
      title: "Transportes X",
      link: "https://transportex-x-utn-frba.netlify.app/",
      icon: <FaCss3 />,
      type: "Frontend",
      description: (
        <>
          {" "}
          <Icon
            icon="material-symbols:travel-rounded"
            className="text-blue-500 inline-block mr-2"
            width="24"
            height="24"
          />
          First solo project creating a static, MPA of three sections,
          responsive Website using HTML; CSS correct use of Flexbox or CSS Grid;
          Bootstrap as an alternative to our layout.
        </>
      ),
      collaborative: false,
    },
  ];

  return (
    <div
      id="Projects"
      className="px-4 sm:px-8 md:px-16 lg:px-20 py-16 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-secondary"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} data-aos-delay={index * 100} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
