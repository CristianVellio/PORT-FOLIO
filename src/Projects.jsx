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
import { SiAngular } from "react-icons/si";

function Projects() {
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
        className="b_glow relative group w-80 bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-6xl text-secondary mb-2 hover:text-primary rounded-3xl p-1 b_glow">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="p-4">
          <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">
            {type}
          </span>
          <p className="text-gray-300 text-sm">{description}</p>
          {collaborative && (
            <span className="block text-tertiary text-xs mt-2">
              Proyecto colaborativo
            </span>
          )}
        </div>
      </a>
    );
  }

  const projects = [
    {
      img: img3,
      title: "Bookstore App Fullstack",
      link: "https://proyecto-libreria.vercel.app/",
      icon: <FaReact />,
      type: "Fullstack",
      description:
        "📚 The Bookstore project is a modern web platform for book management and sales. Designed for both end users and administrators, this application allows users to explore books, add them to their cart, and make purchases. For administrators, it provides complete CRUD functionalities to manage the library.",
      collaborative: true,
    },
    {
      img: img11,
      title: "Bienestar Plus Fullstack",
      link: "https://github.com/ISPC-Soluciones/Bienestar-Plus",
      icon: <SiAngular />,
      type: "Fullstack",
      description:
        "💚 Bienestar+ is a web application focused on physical, mental, and emotional well-being. It allows users to manage healthy habits, access mental health resources, and receive personalized recommendations to improve their quality of life. Developed by students of the Software Development Technician program in Angular with Agile Methodologies Scrum.",
      collaborative: true,
    },
    {
      img: img6,
      title: "Portfolio",
      link: "https://github.com/CristianVellio/PORT-FOLIO",
      icon: <FaReact />,
      type: "Frontend",
      description:
        "💼 This personal web portfolio is designed to showcase skills, projects, and provide a means of contact for potential employers or collaborators. The website is built with Vite, React, and Tailwind CSS, featuring a modern and responsive design, with animations that enhance the user experience.",
      collaborative: false,
    },
    {
      img: img2,
      title: "Weather IoT Project",
      link: "https://proyecto-clima-azure.vercel.app/",
      icon: <FaPython />,
      type: "Fullstack IoT",
      description:
        "🌤️ The Meteorological Station project is an IoT system designed to monitor and record real-time weather conditions. It uses a Supabase database to store data and an interactive frontend for visualization. It combines simulation, integration, and web development to offer a modern and scalable solution.",
      collaborative: true,
    },
    {
      img: img4,
      title: "Currency Converter",
      link: "https://github.com/CristianVellio/conversor-de-moneda",
      icon: <FaJava />,
      type: "Backend",
      description:
        "🟡 The Currency Converter is an application designed to perform currency conversions in a simple and efficient way. The project allows conversion between different currencies using up-to-date data provided by a third-party API..",
      collaborative: false,
    },
    {
      img: img7,
      title: "Med Clinic API",
      link: "https://github.com/CristianVellio/api",
      icon: <FaJava />,
      type: "API REST",
      description:
        "🩺 Voll Med Clinic API is a RESTful service built with Spring Boot for managing clinic operations, including authentication, user management, and medical data handling. It uses JWT authentication for security and integrates with MySQL for persistent data storage.",
      collaborative: false,
    },
    {
      img: img8,
      title: "Screenmatch",
      link: "https://github.com/CristianVellio/screenmatch",
      icon: <FaJava />,
      type: "Backend",
      description:
        "Screenmatch is a Spring Boot-based Java application designed as an introductory project for working with the framework. It leverages several key technologies.",
      collaborative: false,
    },
    {
      img: img9,
      title: "ForoHub",
      link: "https://github.com/CristianVellio/FOROHUB",
      icon: <FaJava />,
      type: "Backend",
      description:
        "ForoHub is a RESTful web application built using Spring Boot, designed to facilitate the creation of topics and publication of responses within a user-centric forum. The application includes robust security features, user management, and a modular design to ensure scalability and maintainability.",
      collaborative: false,
    },
    {
      img: img10,
      title: "LiterAlura",
      link: "https://github.com/CristianVellio/LiterAlura",
      icon: <FaJava />,
      type: "Backend",
      description:
        "LiterAlura is a book management application developed in Java with Spring Boot. It allows you to manage a digital library with information about books, authors, and languages",
      collaborative: false,
    },
    {
      img: img1,
      title: "Text Encryptor",
      link: "https://encrypter-oracle-one.vercel.app/",
      icon: <FaHtml5 />,
      type: "Frontend",
      description:
        "Solo challenge creating an application that encrypts texts, so you can exchange secret messages with other people who know the encryption key used.",
      collaborative: false,
    },
    {
      img: img5,
      title: "Transportes X",
      link: "https://transportex-x-utn-frba.netlify.app/",
      icon: <FaCss3 />,
      type: "Backend",
      description:
        "Solo project creating a static, MPA of three sections, responsive Website using HTML; CSS correct use of Flexbox or CSS Grid; Bootstrap as an alternative to our layout.",
      collaborative: false,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
