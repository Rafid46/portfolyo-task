import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaMapMarkerAlt, FaArrowRight, FaCopy, FaCheck } from "react-icons/fa";

import Projects from "./Projects";
import Mascot from "../Mascot/Mascot";
import Educations from "../Educations";
import NewSkill from "./NewSkill";
import WebThreads from "../WebThreads";
import ParticleText from "./ParticleText";
import StrokeText from "./StrokeText";
import NewNavbar from "../../Shared/NewNavbar";
import Ticker from "./Ticker";
import SpecialFooter from "./SpecialFooter";

const Home = () => {
  const [topButton, setTopButton] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mostafarafid45@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white relative selection:bg-teal-400 selection:text-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NewNavbar />
      </div>

      <main>
        <section
          id="home"
          aria-label="Hero"
          className="bg-cover bg-center relative min-h-screen lg:min-h-[880px] flex flex-col justify-center items-center pt-24 pb-14 overflow-hidden"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              maskImage:
                "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          >
            <WebThreads
              color1="#0082ff"
              color2="#c800ff"
              color3="#FFFFFF"
              speed={0.2}
              threadCount={isMobile ? 4 : 5}
              frequency={isMobile ? 2.8 : 6.5}
              spread={isMobile ? 0.12 : 0.2}
              taper={0.65}
              position={isMobile ? 0.5 : 0.47}
              fanMode={isMobile ? "center" : "right"}
              glow={0.035}
              falloff={0.6}
              thickness={0.95}
              brightness={0.7}
              opacity={1}
              mirror={true}
              shimmer={false}
              grain={false}
              grainIntensity={0.05}
              mouseInteraction={true}
              mouseStrength={0.25}
              backgroundColor="#000000"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-8 text-center max-w-6xl mx-auto">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/85 border border-zinc-700/60 backdrop-blur-md text-xs sm:text-sm font-neue text-zinc-300 mb-4 sm:mb-6 shadow-lg shadow-black/40">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt
                  className="text-teal-400 text-xs shrink-0"
                  aria-hidden="true"
                />
                <span>Dhaka, Bangladesh</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span className="text-teal-400 font-medium">
                Frontend Developer
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Work
              </span>
            </div>

            <div className="w-full h-[80px] sm:h-[130px] lg:h-[160px] -mb-2 sm:-mb-8 lg:-mb-12 relative z-10">
              <ParticleText
                text="web"
                particleSize={2.2}
                density={4}
                color="#f8fafc"
                highlightColor="#8b5cf6"
                scatter={190}
                gatherDuration={1600}
                stagger={420}
                pointerRepel={42}
                repelRadius={120}
                idleDrift={0.8}
                trigger="mount"
                fontSize="clamp(3rem, 10vw, 6.5rem)"
                fontWeight={800}
                fontFamily="inherit"
                glow
              />
            </div>

            <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
              <StrokeText
                text="DEVELOPER"
                fontFamily="font-grotest"
                fontSize={isMobile ? 110 : 250}
                strokeWidth={2}
                strokeColor="#A78BFA"
                fillColor="#E3F2FD"
                drawDuration={5}
                fillDelay={0.2}
                stagger={0.01}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontWeight={400}
                letterSpacing={0}
                reverse={false}
              />
            </div>

            <p className="max-w-2xl mx-auto font-neue text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4 sm:mt-6">
              Engineering responsive, pixel-perfect web interfaces with React,
              Next.js, and TypeScript. Focused on scalable architecture, fluid
              animations, and high performance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="min-h-[46px] px-6 py-2.5 rounded-full bg-teal-400 hover:bg-white text-black font-semibold font-neue text-sm sm:text-base transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none shadow-lg shadow-teal-500/20"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="text-xs" aria-hidden="true" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="min-h-[46px] px-6 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-neue text-sm sm:text-base transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
              >
                Get in Touch
              </button>

              <button
                onClick={handleCopyEmail}
                className="min-h-[46px] px-5 py-2.5 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-neue text-sm sm:text-base transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
                aria-label="Copy email"
              >
                {copied ? (
                  <>
                    <FaCheck
                      className="text-emerald-400 text-xs"
                      aria-hidden="true"
                    />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy
                      className="text-teal-400 text-xs"
                      aria-hidden="true"
                    />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 w-full max-w-3xl">
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-bold text-white font-founderGrotest">
                  2+ Years
                </p>
                <p className="text-xs text-zinc-400 font-neue mt-1">
                  Frontend Experience
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-bold text-teal-400 font-founderGrotest">
                  Production
                </p>
                <p className="text-xs text-zinc-400 font-neue mt-1">
                  Next.js & React Apps
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm col-span-2 sm:col-span-1">
                <p className="text-xl sm:text-2xl font-bold text-white font-founderGrotest">
                  100%
                </p>
                <p className="text-xs text-zinc-400 font-neue mt-1">
                  Focus on Performance
                </p>
              </div>
            </div>
          </div>
        </section>

        <Ticker />

        <section
          id="about"
          aria-label="About Mostafa Al Rafid"
          className="px-5 sm:px-8 max-w-6xl mx-auto pt-20 sm:pt-28 pb-12"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-brolimo font-semibold text-white">
              About & Craft<span className="text-teal-400">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 flex flex-col items-center justify-center text-center">
              <div className="flex justify-center mb-4">
                <Mascot
                  directions="/mascots/rafid-directions.webp"
                  reactions="/mascots/rafid-reactions.webp"
                  size={isMobile ? 220 : 280}
                  className="rounded-2xl border border-zinc-700/60 p-2 shadow-2xl bg-zinc-900/80"
                  alt="Mostafa Al Rafid Interactive Mascot"
                />
              </div>

              <span className="text-xs font-neue text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 px-3 py-1 rounded-full">
                Interactive mascot • Move cursor to look around
              </span>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 flex flex-col text-left">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase text-teal-400 font-neue px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/20">
                    Frontend Developer
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-300 font-neue px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/50">
                    <FaMapMarkerAlt
                      className="text-teal-400 text-xs shrink-0"
                      aria-hidden="true"
                    />
                    <span>Dhaka, Bangladesh</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-400 font-caveat mb-4">
                  Mostafa Al Rafid
                </h3>

                <p className="font-neue text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  Passionate Frontend Developer specializing in crafting modern,
                  high-performance web applications. With hands-on experience in
                  building scalable user interfaces using React, Next.js, and
                  TypeScript, I translate intricate designs into responsive,
                  accessible, and fluid user experiences. I thrive on solving
                  complex frontend challenges and collaborating in dynamic team
                  environments.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-zinc-800/80">
                  <div className="p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/50 text-left">
                    <p className="text-xs text-teal-400 font-neue font-medium">
                      Core Focus
                    </p>
                    <p className="text-sm font-semibold text-white font-neue">
                      Frontend UI/UX
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/50 text-left">
                    <p className="text-xs text-teal-400 font-neue font-medium">
                      Primary Stack
                    </p>
                    <p className="text-sm font-semibold text-white font-neue">
                      React & Next.js
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/50 text-left col-span-2 sm:col-span-1">
                    <p className="text-xs text-teal-400 font-neue font-medium">
                      Availability
                    </p>
                    <p className="text-sm font-semibold text-white font-neue">
                      Global / Remote
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-center">
                  <span className="text-xs text-teal-400 font-neue uppercase font-semibold mb-1">
                    Design & Performance
                  </span>
                  <p className="text-sm text-zinc-300 font-neue">
                    Fluid micro-animations, accessible semantic structure, and
                    sub-second load times.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-center">
                  <span className="text-xs text-teal-400 font-neue uppercase font-semibold mb-1">
                    Clean Code Standard
                  </span>
                  <p className="text-sm text-zinc-300 font-neue">
                    Modular components, strict typing, reusable hooks, and
                    scalable state management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          aria-label="Skills and Technologies"
          className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-brolimo font-semibold text-white">
              Skills & Technologies<span className="text-teal-400">.</span>
            </h2>
          </div>
          <NewSkill />
        </section>

        <section
          id="projects"
          aria-label="Featured Projects"
          className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20"
        >
          <div className="mb-8 px-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-brolimo font-semibold text-white">
              Featured Projects<span className="text-teal-400">.</span>
            </h2>
          </div>
          <Projects />
        </section>

        <section
          aria-label="Experience and Education"
          className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20"
        >
          <Educations />
        </section>
      </main>

      <SpecialFooter />

      {topButton && (
        <button
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 text-2xl text-teal-400 bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-md rounded-full flex items-center justify-center z-50 transition-all hover:scale-110 hover:border-teal-400 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none shadow-xl"
          onClick={scrollUp}
          aria-label="Scroll to top"
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
