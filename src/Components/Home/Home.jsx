import { useEffect, useRef, useState } from "react";
import EditorialHero from "./EditorialHero";
import EditorialBar from "./EditorialBar";
import EditorialManifesto from "./EditorialManifesto";
import Projects from "./Projects";
import NewSkill from "./NewSkill";
import Educations from "../Educations";
import SpecialFooter from "./SpecialFooter";
import FooterReveal from "./FooterReveal";
import Reveal from "../motion/Reveal";

const Home = () => {
  const projectsRef = useRef(null);
  const [projectsWarm, setProjectsWarm] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const checkSection = () => {
      rafId = 0;
      const el = projectsRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const inFocus = rect.top <= winH * 0.6 && rect.bottom >= winH * 0.42;
      setProjectsWarm((prev) => (prev === inFocus ? prev : inFocus));
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(checkSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    checkSection();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#08080a] text-[#f4f4f0] font-interTight relative selection:bg-teal-400 selection:text-[#08080a]">
      <FooterReveal footer={<SpecialFooter />}>
        <main
          className={`transition-colors duration-700 ease-out ${
            projectsWarm ? "bg-[#F9F0E8]" : "bg-[#08080a]"
          }`}
        >
          <EditorialHero isWarmSection={projectsWarm} />
          {/* <EditorialBar /> */}
          <EditorialManifesto isWarm={projectsWarm} />

          <section
            id="projects"
            ref={projectsRef}
            aria-label="Featured Projects"
            className="relative w-full overflow-hidden px-5 sm:px-8 py-20 sm:py-28 bg-transparent"
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                projectsWarm ? "opacity-[0.045]" : "opacity-0"
              }`}
              style={{
                backgroundImage:
                  "radial-gradient(#231712 0.8px, transparent 0.8px)",
                backgroundSize: "18px 18px",
              }}
            />

            <div className="relative z-10">
              <Projects isWarm={projectsWarm} />
            </div>
          </section>

          <section
            id="skills"
            aria-label="Skills and Technologies"
            className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24"
          >
            <Reveal className="mb-12" y={28}>
              <div
                className={`flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b pb-8 transition-colors duration-700 ${
                  projectsWarm ? "border-[#231712]/15" : "border-white/10"
                }`}
              >
                <div>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase border-2 rotate-1 mb-4 transition-all duration-700 ${
                      projectsWarm
                        ? "bg-[#231712] text-[#F9F0E8] border-[#231712] shadow-[3px_3px_0px_#6EE7B7]"
                        : "bg-[#6EE7B7] text-[#17120E] border-[#17120E] shadow-[3px_3px_0px_#D94826]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        projectsWarm ? "bg-[#6EE7B7]" : "bg-[#17120E]"
                      }`}
                    />
                    03 · Toybox &amp; Stack
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2
                      className={`text-3xl sm:text-4xl lg:text-5xl !font-bricolage font-bold [letter-spacing:-0.02em] leading-tight transition-colors duration-700 ${
                        projectsWarm ? "text-[#231712]" : "text-[#F9F0E8]"
                      }`}
                    >
                      Skills &amp;{" "}
                      <span
                        className={`transition-colors duration-700 ${
                          projectsWarm ? "text-[#D94826]" : "text-[#6EE7B7]"
                        }`}
                      >
                        Technologies
                      </span>
                    </h2>
                    <svg
                      viewBox="0 0 46 38"
                      fill="none"
                      aria-hidden="true"
                      className="w-10 h-8 shrink-0"
                    >
                      <rect
                        x="6"
                        y="10"
                        width="32"
                        height="22"
                        rx="6"
                        fill="#F2B418"
                        stroke={projectsWarm ? "#231712" : "#F9F0E8"}
                        strokeWidth="2.2"
                      />
                      <path
                        d="M16 10V7C16 5.3 17.3 4 19 4H25C26.7 4 28 5.3 28 7V10"
                        stroke={projectsWarm ? "#231712" : "#F9F0E8"}
                        strokeWidth="2.2"
                      />
                      <path
                        d="M15 21H29"
                        stroke="#17120E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="22"
                        cy="21"
                        r="2.5"
                        fill="#D94826"
                        stroke="#17120E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <p
                  className={`text-xs sm:text-sm font-interTight max-w-xs sm:text-right transition-colors duration-700 ${
                    projectsWarm ? "text-[#6F5D52]" : "text-[#F9F0E8]/60"
                  }`}
                >
                  Frontend, state, motion &amp; backend tools in active
                  rotation.
                </p>
              </div>
            </Reveal>
            <NewSkill />
          </section>

          <section
            id="experience"
            aria-label="Experience and Education"
            className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24"
          >
            <Reveal className="mb-12" y={28}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-white/10 pb-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2B418] text-[#17120E] text-[11px] font-mono font-bold uppercase border-2 border-[#17120E] shadow-[3px_3px_0px_#9D8CF5] -rotate-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17120E]" />
                    04 · Story &amp; Roots
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl !font-bricolage font-bold text-[#F9F0E8] [letter-spacing:-0.02em]">
                    Experience &amp;{" "}
                    <span className="relative inline-block text-[#9D8CF5]">
                      Education
                      <svg
                        viewBox="0 0 180 14"
                        fill="none"
                        aria-hidden="true"
                        className="w-full h-3 -mt-1"
                      >
                        <path
                          d="M3 10C48 2 132 2 177 9"
                          stroke="#F2B418"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h2>
                </div>
                <p className="text-xs sm:text-sm font-interTight text-[#F9F0E8]/60 max-w-xs sm:text-right">
                  Roles shipped in production teams alongside computer science
                  foundations.
                </p>
              </div>
            </Reveal>
            <Educations />
          </section>
        </main>
      </FooterReveal>
    </div>
  );
};

export default Home;
