import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-orange-700 text-white lg:px-48 py-20">
      <div className="container flex justify-between items-center mx-auto gap-4">
        <div className="mb-4 md:md-0">
          <span className="text-3xl font-semibold text-lime-400 py-2 uppercase">
            CV
          </span>
          <p className="text-16px text-bold my-4">Cristian Vellio© 2024</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-lime-400 py-2 uppercase">
            Formation
          </h3>
          <ul className="text-[16px] text-bold my-4">
            <li className="my-2">Full-Stack Developer</li>
            <li className="my-2">Web Developer</li>
            <li className="my-2">Python Developer</li>
          </ul>
        </div>
        <div className="flex flex-col md:mb-0">
          <h3 className="text-3xl font-semibold text-lime-400 py-2 uppercase">
            Find Me on
          </h3>
          <div className="flex space-x-2 flex-row items-center justify-items-center">
            <a
              href="https://www.github.com/CristianVellio"
              className="text-white hover:text-lime-400 rounded-full p-2"
            >
              <FaGithub className="text-[48px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/cristianvellio"
              className="text-white hover:text-lime-400 rounded-full p-2"
            >
              <FaLinkedinIn className="text-[48px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
