import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimesCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import img from "./assets/LOGO.png";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="bg-orange-700 relative">
      <div className="h-20 flex justify-between text-white items-center px-4 lg:px-20 py-4 border-b border-amber-800">
        <div className="flex items-center flex-1">
          <img
            src={img}
            width={80}
            height={80}
            className="rounded-full"
            alt="logo"
          />
        </div>
        <div className="hidden lg:flex flex-1 justify-end">
          <ul className="flex gap-8 text-[18px]">
            <li className="text-lg font-bold hover:text-lime-600 cursor-pointer">
              <Link spy={true} smooth={true} to="Home">
                Home
              </Link>
            </li>
            <li className="text-lg font-bold hover:text-lime-600 cursor-pointer">
              <Link spy={true} smooth={true} to="About">
                About
              </Link>
            </li>
            <li className="text-lg font-bold hover:text-lime-600 cursor-pointer">
              <Link spy={true} smooth={true} to="Skills">
                Skills
              </Link>
            </li>
            <li className="text-lg font-bold hover:text-lime-600 cursor-pointer">
              <Link spy={true} smooth={true} to="Projects">
                Projects
              </Link>
            </li>
            <li className="text-lg font-bold hover:text-lime-600 cursor-pointer">
              <Link spy={true} smooth={true} to="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="text-[25px] font-semibold" onClick={handleClick}>
            {click ? <FaTimesCircle /> : <TiThMenu />}
          </button>
        </div>
      </div>
      {click && (
        <div className="text-white lg:hidden bg-amber-900 w-full z-50 absolute">
          <ul className="text-center text-xl p-5">
            <li className="py-4 border-b border-amber-800 hover:bg-amber-800">
              <Link spy={true} smooth={true} to="Home" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="py-4 border-b border-amber-800 hover:bg-amber-800">
              <Link spy={true} smooth={true} to="About" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="py-4 border-b border-amber-800 hover:bg-amber-800">
              <Link spy={true} smooth={true} to="Skills" onClick={handleClick}>
                Skills
              </Link>
            </li>
            <li className="py-4 border-b border-amber-800 hover:bg-amber-800">
              <Link
                spy={true}
                smooth={true}
                to="Projects"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="py-4 border-b border-amber-800 hover:bg-amber-800">
              <Link spy={true} smooth={true} to="Contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
