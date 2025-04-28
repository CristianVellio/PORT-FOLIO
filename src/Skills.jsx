import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiSpring,
  SiMongodb,
  SiTypescript,
  SiAngular,
  SiNgrx,
  SiDjango,
} from "react-icons/si";
import {
  FaPython,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import { SiFlask, SiMysql } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";

function Skills() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div id="Skills" className="p-20 flex flex-col items-center justify-center">
      <h2
        data-aos="fade-right"
        className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-secondary"
      >
        Favorite Stacks
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a
          data-aos="fade-up"
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHtml5 className=" text-[100px] flex items-center justify-center font-semibold text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCss3Alt className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-up"
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineJavaScript className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-up"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTypescript className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-up"
          href="https://angular.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiAngular className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-up"
          href="https://ngrx.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNgrx className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReact className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-up"
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNodeJs className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://www.java.com/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaJava className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://spring.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiSpring className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPython className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://www.djangoproject.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiDjango className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-up"
          href="https://flask.palletsprojects.com/en/3.0.x/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFlask className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMongodb className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://www.mysql.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMysql className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
        <a
          data-aos="fade-down"
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoPostgresql className=" text-[100px] flex items-center text-tertiary hover:text-secondary rounded-ss-3xl rounded-br-3xl b_glow p-2" />
        </a>
      </div>
    </div>
  );
}

export default Skills;
