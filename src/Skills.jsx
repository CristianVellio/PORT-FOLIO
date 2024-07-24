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
        <FaHtml5
          data-aos="fade-up"
          className=" text-[100px] flex items-center justify-center font-semibold text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <FaCss3Alt
          data-aos="fade-down"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <AiOutlineJavaScript
          data-aos="fade-up"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <FaReact
          data-aos="fade-down"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <FaNodeJs
          data-aos="fade-up"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <FaPython
          data-aos="fade-down"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <SiFlask
          data-aos="fade-up"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
        <SiMysql
          data-aos="fade-down"
          className=" text-[100px] flex items-center text-lime-600 hover:text-lime-500 rounded-ss-3xl rounded-br-3xl b_glow p-2"
        />
      </div>
    </div>
  );
}

export default Skills;
