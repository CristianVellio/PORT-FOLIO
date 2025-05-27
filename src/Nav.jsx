import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimesCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import img from "./assets/img/logo/LOGO.webp";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (click) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [click]);

  return (
    <nav className="bg-slate-800 relative">
      <div className="h-20 font-tilt flex justify-between text-white items-center px-4 lg:px-20 py-4 border-b border-tertiary">
        <div className="flex items-center  flex-1">
          <a href="/" rel="noopener noreferrer">
            <img
              src={img}
              width={50}
              height={50}
              className="rounded-full hover:text-primary glow p-1"
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden lg:flex flex-1 justify-end">
          <ul className="flex gap-8 text-[18px]">
            <li className="text-lg font-bold cursor-pointer">
              <Link spy={true} smooth={true} to="Home">
                <span className="menu-animation text-white hover:text-primary">
                  Home
                </span>
              </Link>
            </li>
            <li className="text-lg font-bold cursor-pointer">
              <Link spy={true} smooth={true} to="About">
                <span className="menu-animation text-white hover:text-primary">
                  About
                </span>
              </Link>
            </li>
            <li className="text-lg font-bold cursor-pointer">
              <Link spy={true} smooth={true} to="Skills">
                <span className="menu-animation text-white hover:text-primary">
                  Skills
                </span>
              </Link>
            </li>
            <li className="text-lg font-bold cursor-pointer">
              <Link spy={true} smooth={true} to="Projects">
                <span className="menu-animation text-white hover:text-primary">
                  Projects
                </span>
              </Link>
            </li>
            <li className="text-lg font-bold cursor-pointer">
              <Link spy={true} smooth={true} to="Certifications">
                <span className="menu-animation text-white hover:text-primary">
                  Certifications
                </span>
              </Link>
            </li>
            <li className="text-lg font-bold cursor-pointer">
              <Link spy={true} smooth={true} to="Contact">
                <span className="menu-animation text-white hover:text-primary">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="text-[25px] font-semibold hover:text-primary"
            onClick={handleClick}
          >
            {click ? <FaTimesCircle /> : <TiThMenu />}
          </button>
        </div>
      </div>
      {click && (
        <>
          <div
            className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${
              click ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={handleClick}
          />
          <div
            className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-slate-800 z-50 transform transition-transform duration-300 ${
              click ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <div className="flex flex-col p-6">
              <button
                className="text-right text-2xl mb-4 self-end text-tertiary hover:text-primary"
                onClick={handleClick}
              >
                <FaTimesCircle />
              </button>
              <ul className="space-y-6 text-xl font-bold text-white">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Certifications",
                  "Contact",
                ].map((section) => (
                  <li key={section}>
                    <Link
                      spy={true}
                      smooth={true}
                      to={section}
                      onClick={handleClick}
                      className="block hover:text-primary menu-animation cursor-pointer"
                    >
                      {section}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Nav;
