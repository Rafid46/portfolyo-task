import { useEffect, useRef, useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "../Components/motion/Magnetic";
import { scrollToId } from "../lib/smoothScroll";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "process", label: "Process" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
];

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const lastY = useRef(0);

  // Condense on scroll, and tuck away when scrolling down so the work leads.
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        setHidden(y > 240 && y > lastY.current);
        lastY.current = y;
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight whichever section owns the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.to))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (to) => {
    setIsOpen(false);
    scrollToId(to);
  };

  return (
    <header
      className={`w-full border-b transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-xl border-white/10 py-2.5 sm:py-3"
          : "bg-transparent border-transparent py-3.5 sm:py-5"
      } ${hidden && !isOpen ? "-translate-y-full" : "translate-y-0"} px-5 sm:px-10`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <Magnetic strength={0.22}>
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center text-left focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded-md"
            aria-label="Mostafa Al Rafid — back to top"
          >
            <span className="text-2xl sm:text-3xl font-semibold text-teal-400 font-caveat">
              Mostafa Al Rafid
            </span>
          </button>
        </Magnetic>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2 text-xs lg:text-sm uppercase font-poppins text-gray-300"
        >
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              aria-current={active === link.to ? "true" : undefined}
              className={`relative py-1.5 px-2.5 cursor-pointer transition-colors uppercase rounded focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none ${
                active === link.to
                  ? "text-teal-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute left-2.5 right-2.5 -bottom-0.5 h-px bg-teal-400 origin-left transition-transform duration-300 ${
                  active === link.to ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Magnetic strength={0.3}>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400 hover:bg-white text-black text-xs font-semibold font-neue transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <span className="w-2 h-2 rounded-full bg-black/70 animate-pulse" />
              <span>Available for work</span>
            </button>
          </Magnetic>
        </div>

        <button
          onClick={() => setIsOpen((open) => !open)}
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
            {[...navLinks, { to: "contact", label: "Contact" }].map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`text-left min-h-[44px] flex items-center px-2 cursor-pointer transition-colors uppercase rounded focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none ${
                  active === link.to
                    ? "text-teal-400"
                    : "text-gray-300 hover:text-teal-400"
                }`}
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
