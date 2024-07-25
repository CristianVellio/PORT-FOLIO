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
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 z-50 bg-amber-900 transition">
        <ul className="text-center text-xl p-20">
          <li className="text-center text-xl my-4 py-4 border-b border-amber-800 hover:bg-amber-800 hover:rounded">
            <Link spy={true} smooth={true} to="Home">
              Home
            </Link>
          </li>

          <li className="my-4 py-4 border-b border-amber-800 hover:bg-amber-800 hover:rounded">
            <Link spy={true} smooth={true} to="About">
              About
            </Link>
          </li>

          <li className="my-4 py-4 border-b border-amber-800 hover:bg-amber-800 hover:rounded">
            <Link spy={true} smooth={true} to="Skills">
              Skills
            </Link>
          </li>

          <li className="my-4 py-4 border-b border-amber-800 hover:bg-amber-800 hover:rounded">
            <Link spy={true} smooth={true} to="Projects">
              Projects
            </Link>
          </li>

          <li className="my-4 py-4 border-b border-amber-800 hover:bg-amber-800 hover:rounded">
            <Link spy={true} smooth={true} to="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav className=" bg-orange-700 relative">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-amber-800">
        <div className="flex items-center flex-1">
          <img
            src={img}
            width={80}
            height={80}
            className="rounded-full"
            alt="logo"
          />
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className="text-lg text-bold hover:text-lime-600 transition  border-amber-900 hover:border-lime-600 cursor-pointer">
                <Link spy={true} smooth={true} to="#">
                  Home
                </Link>
              </li>

              <li className="text-lg text-bold hover:text-lime-600 transition  border-amber-900 hover:border-lime-600 cursor-pointer">
                <Link spy={true} smooth={true} to="About">
                  About
                </Link>
              </li>

              <li className="text-lg text-bold hover:text-lime-600 transition  border-amber-900 hover:border-lime-600 cursor-pointer">
                <Link spy={true} smooth={true} to="Skills">
                  Skills
                </Link>
              </li>

              <li className="text-lg text-bold hover:text-lime-600 transition  border-amber-900 hover:border-lime-600 cursor-pointer">
                <Link spy={true} smooth={true} to="Projects">
                  Projects
                </Link>
              </li>

              <li className="text-lg text-bold hover:text-lime-600 transition  border-amber-900 hover:border-lime-600 cursor-pointer">
                <Link spy={true} smooth={true} to="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="text-[25px font-semibold] block md:hidden transition"
          onClick={handleClick}
        >
          {click ? <FaTimesCircle /> : <TiThMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
