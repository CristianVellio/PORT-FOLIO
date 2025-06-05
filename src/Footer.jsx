import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "./assets/img/logo/OLOGO.webp";
import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      ref={ref}
      {...props}
      className="bg-slate-800 text-white px-4 py-8 md:px-12 lg:px-48 border-t border-tertiary"
    >
      <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto gap-4">
        <a href="/" rel="noopener noreferrer">
          <img
            src={img}
            width={50}
            height={50}
            className="rounded-full mb-4 lg:mb-0 hover:text-primary glow p-1"
            alt="logo"
          />
        </a>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg font-bold font-serrat">
            &#169; {currentYear} Cristian Vellio{" "}
          </p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="font-orbitron text-xl font-semibold text-primary py-2 uppercase">
            Formation as
          </h3>
          <ul className="font-serrat text-lg font-bold">
            <li className="font-serrat my-2">Software Developer</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="font-orbitron text-xl font-semibold text-primary py-2 uppercase">
            Find Me on
          </h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.github.com/CristianVellio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary rounded-full glow p-2"
            >
              <FaGithub className="text-3xl" />
              <span className="sr-only">Go to GitHub profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cristianvellio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary rounded-full glow p-2"
            >
              <FaLinkedinIn className="text-3xl" />
              <span className="sr-only">Go to LinkedIn profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
