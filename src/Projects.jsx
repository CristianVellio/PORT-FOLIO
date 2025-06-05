import img1 from "./assets/img/projects_covers/ENCRYPTADOR_ORACLE.webp";
import img2 from "./assets/img/projects_covers/WEATHER_IOT.webp";
import img3 from "./assets/img/projects_covers/BOOKSTORE_FS.webp";
import img4 from "./assets/img/projects_covers/CONVERSOR.webp";
import img5 from "./assets/img/projects_covers/TRANSPORTES_X.webp";
import img6 from "./assets/img/projects_covers/TOONME.webp";
import img7 from "./assets/img/projects_covers/clinic_api.webp";
import img8 from "./assets/img/projects_covers/screenmatch.webp";
import img9 from "./assets/img/projects_covers/forohub.webp";
import img10 from "./assets/img/projects_covers/literalura.webp";
import img11 from "./assets/img/projects_covers/Bienestar_Plus_Banner.webp";
import img12 from "./assets/img/projects_covers/toolkit_project.webp";
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import PropTypes from "prop-types";
import { SiAngular, SiGnubash, SiSpring } from "react-icons/si";
import { Icon } from "@iconify/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

function Projects() {
  function ProjectCard({
    img,
    title,
    link,
    icon,
    type,
    description,
    collaborative,
    repo,
  }) {
    return (
      <div className="relative group w-full max-w-sm mx-auto bg-gray-800 shadow-lg flex flex-col h-full">
        <div className="absolute inset-0 pointer-events-none z-0">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="relative w-full h-48 overflow-hidden">
            <img
              loading="lazy"
              src={img}
              alt={title}
              className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-6xl text-primary mb-2 hover:text-secondary rounded-3xl p-1">
                {icon}
              </div>
              <h3 className="font-tilt text-xl font-bold text-white">
                {title}
              </h3>
            </div>
          </div>
          <div className="p-4 flex-grow flex flex-col">
            <span className="inline-block text-center font-bold bg-secondary text-white font-serrat text-sm px-2 py-1 rounded-full mb-2">
              {type}
            </span>
            <p className="text-gray-300 font-serrat text-justify text-sm select-text flex-grow">
              {description}
            </p>
            {collaborative && (
              <span className="font-tilt block text-quaternary text-sm mt-2">
                Collaborative Project
              </span>
            )}
            <div className="mt-4 space-y-1">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serrat block text-sm text-blue-400 hover:text-blue-300 transition duration-200"
                >
                  Visit Deployed Demo →
                </a>
              )}
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serrat block text-sm text-blue-400 hover:text-blue-300 transition duration-200"
                >
                  View GitHub Repository →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  ProjectCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    collaborative: PropTypes.bool,
    link: PropTypes.string,
    repo: PropTypes.string,
  };

  const projects = [
    {
      img: img11,
      title: "Bienestar Plus",
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
          <br /> Bienestar+ is a web application focused on physical, mental,
          and emotional well-being. It allows users to manage healthy habits,
          access mental health resources, and receive personalized
          recommendations to improve their quality of life. <br /> Developed by
          students of the Software Development program, at the Higher
          Polytechnic Institute of Cordoba (ISPC), with Agile Methodologies
          Scrum.
        </>
      ),
      collaborative: true,
      repo: "https://github.com/ISPC-Soluciones/Bienestar-Plus",
    },
    {
      img: img12,
      title: "Administration Toolkit Jr.",
      icon: <SiGnubash />,
      type: "Scripting",
      description: (
        <>
          {" "}
          <Icon
            icon="devicon:linux"
            className="inline-block mr-2"
            width="24"
            height="24"
          />
          <br /> The Administration Toolkit Jr. is a command-line utility
          developed in Bash scripting for Linux-based systems (Ubuntu/Debian).
          <br /> It provides a user-friendly text-based menu interface that
          allows junior system administrators to perform essential system
          monitoring and management tasks without requiring advanced Linux
          knowledge. <br /> Developed by students of the Software Development
          program at the Higher Polytechnic Institute of Cordoba (ISPC).
        </>
      ),
      collaborative: true,
      repo: "https://github.com/CristianVellio/toolkit-linux",
    },
    {
      img: img3,
      title: "Bookstore App",
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
          <br /> The Bookstore project is a modern web platform for book
          management and sales. Designed for both end users and administrators,
          this application allows users to explore books, add them to their
          cart, and make purchases. For administrators, it provides complete
          CRUD functionalities to manage the library. <br /> Final Project of
          FullStack Developer program at the National University of Technology
          (UTN).
        </>
      ),
      collaborative: false,
      link: "https://proyecto-libreria.vercel.app/",
      repo: "https://github.com/CristianVellio/proyecto-Libreria",
    },
    {
      img: img2,
      title: "Meteorological Station",
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
          <br /> The Meteorological Station project is an IoT system designed to
          monitor and record real-time weather conditions. <br /> It uses a
          Supabase database to store data and an interactive frontend for
          visualization of the data collected by Wokwi. <br /> It combines
          simulation, integration, and web development to offer a modern and
          scalable solution. <br /> Developed by students of the Software
          Development program at the Higher Polytechnic Institute of Cordoba
          (ISPC).
        </>
      ),
      collaborative: true,
      link: "https://proyecto-clima-azure.vercel.app/",
      repo: "https://github.com/CristianVellio/proyecto_Clima",
    },
    {
      img: img7,
      title: "Voll Clinic",
      icon: <SiSpring />,
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
          <br /> Voll Med Clinic API is a RESTful service built with Spring Boot
          for managing clinic operations, including authentication, user
          management, and medical data handling. <br /> It uses JWT
          authentication for security and integrates with MySQL for persistent
          data storage.
        </>
      ),
      collaborative: false,
      repo: "https://github.com/CristianVellio/api",
    },
    {
      img: img9,
      title: "ForoHub",
      icon: <SiSpring />,
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
          <br /> ForoHub is a RESTful web application built using Spring Boot,
          designed to facilitate the creation of topics and publication of
          responses within a user-centric forum. <br /> The application includes
          robust security features, user management, and a modular design to
          ensure scalability and maintainability.
        </>
      ),
      collaborative: false,
      repo: "https://github.com/CristianVellio/FOROHUB",
    },
    {
      img: img8,
      title: "Screenmatch",
      icon: <SiSpring />,
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
          <br /> Screenmatch is a Spring Boot-based Java application designed as
          an introductory project for working with the framework. It leverages
          several key technologies.
        </>
      ),
      collaborative: false,
      repo: "https://github.com/CristianVellio/screenmatch",
    },
    {
      img: img10,
      title: "LiterAlura",
      icon: <SiSpring />,
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
          <br /> LiterAlura is a book management application developed in Java
          with Spring Boot. It allows you to manage a digital library with
          information about books, authors, and languages.
        </>
      ),
      collaborative: false,
      repo: "https://github.com/CristianVellio/LiterAlura",
    },
    {
      img: img4,
      title: "Currency Converter",
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
          <br /> The Currency Converter is an application designed to perform
          currency conversions in a simple and efficient way. The project allows
          conversion between different currencies using up-to-date data provided
          by a third-party API.
        </>
      ),
      collaborative: false,
      repo: "https://github.com/CristianVellio/conversor-de-moneda",
    },
    {
      img: img6,
      title: "Portfolio",
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
          <br /> This personal web portfolio is designed to showcase skills,
          projects, and provide a means of contact for potential employers or
          collaborators.
          <br /> The website is built with Vite, React, and Tailwind CSS,
          featuring a modern and responsive design, with animations that enhance
          the user experience.
        </>
      ),
      collaborative: false,
      link: "https://cristianvellio.vercel.app/",
      repo: "https://github.com/CristianVellio/PORT-FOLIO",
    },
    {
      img: img1,
      title: "Text Encryptor",
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
          <br /> Solo challenge creating an application that encrypts texts, so
          you can exchange secret messages with other people who know the
          encryption key used.
        </>
      ),
      collaborative: false,
      link: "https://encrypter-oracle-one.vercel.app/",
      repo: "https://github.com/CristianVellio/Oracle-ONE/tree/main/Challenge%201",
    },
    {
      img: img5,
      title: "Transportes X",
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
          <br /> First solo project creating a static, MPA of three sections,
          responsive Website using HTML; CSS correct use of Flexbox or CSS Grid;
          Bootstrap as an alternative to our layout.
        </>
      ),
      collaborative: false,
      link: "https://transportex-x-utn-frba.netlify.app/",
      repo: "https://github.com/CristianVellio/Proyecto-Integrador-UTN-FRBA-Inicial",
    },
  ];

  return (
    <div
      id="Projects"
      className="px-4 sm:px-8 md:px-16 lg:px-20 py-16 flex flex-col items-center justify-center"
    >
      <h2 className="font-orbitron text-[52px] font-semibold mb-20 leading-normal uppercase text-secondary">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
