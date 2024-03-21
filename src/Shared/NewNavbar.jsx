import React, { useState } from "react";
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

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <details className="dropdown">
          <summary className="m-1 ml-5 cursor-pointer" onClick={toggleMenu}>
            <p className="text-3xl text-white">
              {" "}
              <PiDotsNineBold />
            </p>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <VscCircleLarge className="text-3xl text-white" />
            {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewNavbar;
