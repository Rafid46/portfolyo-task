import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  const handleNavClick = (to) => {
    setIsOpen(false);
    const el = document.getElementById(to.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-zinc-950/80 backdrop-blur-md px-5 sm:px-10 py-3.5 sm:py-4 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center text-left focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded-md"
          aria-label="Mostafa Al Rafid Home"
        >
          <span className="text-2xl sm:text-3xl font-semibold text-teal-400 font-caveat">
            Mostafa Al Rafid
          </span>
        </button>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm uppercase font-poppins text-gray-300"
        >
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className="py-1 px-1.5 cursor-pointer hover:text-teal-400 transition-colors uppercase focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-neue">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden w-11 h-11 flex items-center justify-center text-2xl text-gray-200 hover:text-teal-400 rounded-md focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu2Line />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden flex flex-col gap-1 pt-4 pb-2 text-sm uppercase font-poppins text-gray-300"
          >
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-left min-h-[44px] flex items-center px-2 cursor-pointer hover:text-teal-400 transition-colors uppercase rounded focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NewNavbar;
