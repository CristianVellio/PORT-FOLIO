import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "./assets/LOGO.png";

function Footer() {
  return (
    <footer className="bg-quaternary text-white px-4 py-8 md:px-12 lg:px-48">
      <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto gap-4">
        <a href="/" rel="noopener noreferrer">
          <img
            src={img}
            width={80}
            height={80}
            className="rounded-full mb-4 lg:mb-0"
            alt="logo"
          />
        </a>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg font-bold">Cristian Vellio&#169; 2024</p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-xl font-semibold text-primary py-2 uppercase">
            Formation as
          </h3>
          <ul className="text-lg font-bold">
            <li className="my-2">Software Developer</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-primary py-2 uppercase">
            Find Me on
          </h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.github.com/CristianVellio"
              className="text-secondary hover:text-primary p-2"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/cristianvellio"
              className="text-secondary hover:text-primary p-2"
            >
              <FaLinkedinIn className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
