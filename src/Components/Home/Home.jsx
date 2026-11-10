import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import EditorialHero from "./EditorialHero";
import EditorialManifesto from "./EditorialManifesto";
import Projects from "./Projects";
import NewSkill from "./NewSkill";
import Educations from "../Educations";
import SpecialFooter from "./SpecialFooter";
import FooterReveal from "./FooterReveal";
import Reveal from "../motion/Reveal";
import { scrollToTop } from "../../lib/smoothScroll";

const Home = () => {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-[#f4f4f4] font-interTight relative selection:bg-[#111111] selection:text-white">
      <FooterReveal footer={<SpecialFooter />}>
        <main>
          <EditorialHero />
          <EditorialManifesto />

          <section
            id="skills"
            aria-label="Skills and Technologies"
            className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20"
          >
            <Reveal className="mb-8" y={30}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo font-semibold text-white">
                Skills &amp; Technologies
                <span className="text-neutral-500">.</span>
              </h2>
            </Reveal>
            <NewSkill />
          </section>

          <section
            id="projects"
            aria-label="Featured Projects"
            className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20"
          >
            <Reveal className="mb-8 px-2" y={30}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo font-semibold text-white">
                Featured Projects<span className="text-neutral-500">.</span>
              </h2>
            </Reveal>
            <Projects />
          </section>

          <section
            id="experience"
            aria-label="Experience and Education"
            className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20"
          >
            <Educations />
          </section>
        </main>
      </FooterReveal>

      {topButton && (
        <button
          type="button"
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 text-2xl text-white bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md rounded-full flex items-center justify-center z-50 transition-all hover:scale-110 hover:border-white focus-visible:outline-none shadow-xl cursor-pointer"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
