import React, { useEffect, useState } from "react";
import TestNavbar from "./TestNavbar";
import { RiMenu2Line } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { PiDotsNineBold } from "react-icons/pi";
import { VscCircleLarge } from "react-icons/vsc";
const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });
  const { x, y } = mousePosition;
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <details className="dropdown">
          <summary className="m-1 ml-5 cursor-pointer" onClick={toggleMenu}>
            <div className="">
              <motion.div
                animate={{ WebkitMaskPosition: `${x}px ${y}px` }}
                transition={{ type: "tween", ease: "backOut" }}
                className=""
              >
                <p className="text-3xl text-white ">
                  {" "}
                  <PiDotsNineBold className="" />
                </p>
              </motion.div>
              {/* <div>
                <p className="text-3xl text-white ">
                  {" "}
                  <VscCircleLarge className="" />
                </p>
              </div> */}
            </div>
          </summary>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ width: 0 }}
                animate={{ width: "100vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                className="shadow dropdown-content z-[9999] w-[500px] lg:w-[1600px] mx-auto -ml-2"
              >
                <TestNavbar />
              </motion.ul>
            )}
          </AnimatePresence>
        </details>
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
