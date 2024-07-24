import { FaPython } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";

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
        className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-white"
      >
        Favorite Stacks
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHtml5
            data-aos="fade-up"
            className=" text-[100px] flex items-center justify-center font-semibold text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCss3Alt
            data-aos="fade-down"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineJavaScript
            data-aos="fade-up"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <FaReact
            data-aos="fade-down"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNodeJs
            data-aos="fade-up"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPython
            data-aos="fade-down"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
        <a
          href="https://flask.palletsprojects.com/en/3.0.x/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFlask
            data-aos="fade-up"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMysql
            data-aos="fade-down"
            className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
          />
        </a>
      </div>
    </div>
  );
}

export default Skills;
