import React, { useEffect, useState } from "react";
import TestNavbar from "./TestNavbar";
import { RiMenu2Line } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { PiDotsNineBold } from "react-icons/pi";
import { VscCircleLarge } from "react-icons/vsc";
import { Link } from "react-scroll";
const NewNavbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const updateMousePosition = (e) => {
  //   setMousePosition({ x: e.clientX, y: e.clientY });
  // };
  // useEffect(() => {
  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // });
  // const { x, y } = mousePosition;
  return (
    <div className="navbar w-full bg-transparent">
      <div className="navbar-start mt-5 mx-5">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="cursor-pointer">
              <motion.div className="">
                <p className="text-5xl text-white ">
                  {" "}
                  <PiDotsNineBold className="" />
                </p>
              </motion.div>
            </label>
          </div>
          <div className="ml-5 drawer-side z-[9999] ">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-80 min-h-full bg-white text-base-content">
              {/* Sidebar content here */}

              <div className="gap-5 h-screen justify-center uppercase flex items-center flex-col text-5xl font-poppins font-normal text-zinc-700">
                <div className="text-start font-caveat">
                  <p className="text-3xl font-semibold text-teal-400">
                    JOHN DOE
                  </p>
                </div>
                <li>
                  <a>Home</a>
                </li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                >
                  <li>
                    <a>About</a>
                  </li>
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                >
                  <li>
                    <a>Services</a>
                  </li>
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                >
                  <li>
                    <a>Projects</a>
                  </li>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                >
                  <li>
                    <a>Contact</a>
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <VscCircleLarge className="hoverStyle text-3xl text-white" />
            {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewNavbar;
