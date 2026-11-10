import React, { useEffect, useState } from "react";
import { scrollToId } from "../../lib/smoothScroll";
import diffImg from "../../assets/diff.png";
import Mascot from "../Mascot/Mascot";
import TechText from "./TechText";
import GooeyNav from "./GooeyNav";
import "./contactButton.css";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const TECH_MARKS = [
  {
    name: "React",
    glyph: "M7 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z",
  },
  { name: "Next.js", glyph: "M2 2h10v2H4v3h6v2H4v5H2z" },
  { name: "TypeScript", glyph: "M2 12V2l5 6 5-6v10h-2V6L7 10 4 6v6z" },
  { name: "Tailwind", glyph: "M7 1l6 6-6 6-6-6zm0 3L4 7l3 3 3-3z" },
  { name: "Zustand", glyph: "M2 7l5-5 5 5-5 5z" },
  { name: "Node.js", glyph: "M7 1l4 7H3zm0 5l4 8H3z" },
];

const EditorialHero = () => {
  const [activeNavIdx, setActiveNavIdx] = useState(0);
  const [qHovered, setQHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [countExp, setCountExp] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleNavChange = (index, item) => {
    setActiveNavIdx(index);
    if (item.label === "Home") {
      scrollToId("home");
    } else if (item.label === "Work") {
      scrollToId("projects");
    } else if (item.label === "About") {
      scrollToId("manifesto");
    } else if (item.label === "Contact") {
      scrollToId("contact", -72, 7.5);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const contactEl = document.getElementById("contact");
      const projectsEl = document.getElementById("projects");
      const manifestoEl = document.getElementById("manifesto");

      if (contactEl && y + window.innerHeight >= document.documentElement.scrollHeight - 350) {
        setActiveNavIdx(3);
      } else if (projectsEl && y + 300 >= projectsEl.offsetTop) {
        setActiveNavIdx(1);
      } else if (manifestoEl && y + 300 >= manifestoEl.offsetTop) {
        setActiveNavIdx(2);
      } else {
        setActiveNavIdx(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReduced) {
      setLoaded(true);
      setCountExp(2);
      setCountProjects(10);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    setLoaded(true);
    const start = performance.now();
    const duration = 1400;

    const animateCounters = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCountExp(Math.floor(ease * 2));
      setCountProjects(Math.floor(ease * 10));
      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setCountExp(2);
        setCountProjects(10);
      }
    };
    requestAnimationFrame(animateCounters);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero"
      className={`relative w-full overflow-hidden min-h-[calc(var(--u)*938)] pb-[calc(var(--u)*40)] md:pb-0 transition-colors duration-700 ease-out ${
        scrollY > 280 ? "bg-[#0b0b0b]" : "bg-[#dadada]"
      }`}
    >
      <div
        className={`absolute left-0 right-0 bottom-0 h-[calc(var(--u)*360)] pointer-events-none bg-gradient-to-b from-transparent via-black/60 to-black transition-opacity duration-700 ease-out z-10 ${
          scrollY > 160
            ? "opacity-100"
            : scrollY > 60
              ? "opacity-70"
              : "opacity-0"
        }`}
      />
      <header
        className={`fixed z-50 transition-all duration-700 ease-out left-4 md:left-[calc(var(--u)*57)] top-4 md:top-[calc(var(--u)*40)] ${
          loaded ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        <div className="bg-[#111111]/85 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          <GooeyNav
            items={NAV_ITEMS}
            initialActiveIndex={0}
            activeIndex={activeNavIdx}
            theme="dark"
            color="#f4f4f5"
            size="md"
            frame={false}
            particleCount={24}
            spread={26}
            animationTime={450}
            timeVariance={750}
            gooeyness={0.65}
            wobble={0.5}
            hoverEffect={false}
            onChange={handleNavChange}
          />
        </div>
      </header>
      <div className="hidden md:block relative w-full h-[calc(var(--u)*938)]">
        <header className="w-full">
          <div className="flex items-center">
            <div className={`z-30 text-[calc(var(--u)*13.5)] text-[#333333]`}>
              Dhaka, Bangladesh · 2026
            </div>

            <div
              className={`absolute z-30 transition-all duration-700 ease-out left-[calc(var(--u)*1195)] top-[calc(var(--u)*46)] ${loaded ? "translate-y-0 opacity-100" : "translate-y-[calc(var(--u)*14)] opacity-0"}`}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact", -72, 7.5);
                }}
                aria-label="Contact Me"
                className="contact-uiverse-btn"
              >
                <div className="bg" />
                <svg
                  className="splash"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 342 208"
                  height="208"
                  width="342"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeOpacity="0.3"
                    d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeOpacity="0.3"
                    d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeOpacity="0.3"
                    d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeOpacity="0.3"
                    d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeOpacity="0.3"
                    d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeOpacity="0.3"
                    d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"
                  />
                </svg>
                <div className="wrap">
                  <svg
                    className="path"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 221 42"
                    height="42"
                    width="221"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="3"
                      d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
                    />
                  </svg>
                  <div className="outline" />
                  <div className="content">
                    <span className="char state-1">
                      <span data-label="C" style={{ "--i": 1 }}>
                        C
                      </span>
                      <span data-label="o" style={{ "--i": 2 }}>
                        o
                      </span>
                      <span data-label="n" style={{ "--i": 3 }}>
                        n
                      </span>
                      <span data-label="t" style={{ "--i": 4 }}>
                        t
                      </span>
                      <span data-label="a" style={{ "--i": 5 }}>
                        a
                      </span>
                      <span data-label="c" style={{ "--i": 6 }}>
                        c
                      </span>
                      <span data-label="t" style={{ "--i": 7 }}>
                        t
                      </span>
                      <span data-label="M" style={{ "--i": 8 }}>
                        M
                      </span>
                      <span data-label="e" style={{ "--i": 9 }}>
                        e
                      </span>
                    </span>
                    <div className="icon">
                      <div />
                    </div>
                    <span className="char state-2">
                      <span data-label="C" style={{ "--i": 1 }}>
                        C
                      </span>
                      <span data-label="o" style={{ "--i": 2 }}>
                        o
                      </span>
                      <span data-label="n" style={{ "--i": 3 }}>
                        n
                      </span>
                      <span data-label="t" style={{ "--i": 4 }}>
                        t
                      </span>
                      <span data-label="a" style={{ "--i": 5 }}>
                        a
                      </span>
                      <span data-label="c" style={{ "--i": 6 }}>
                        c
                      </span>
                      <span data-label="t" style={{ "--i": 7 }}>
                        t
                      </span>
                      <span data-label="M" style={{ "--i": 8 }}>
                        M
                      </span>
                      <span data-label="e" style={{ "--i": 9 }}>
                        e
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </header>

        <div className="absolute z-20 left-[calc(var(--u)*57)] top-[calc(var(--u)*246)]">
          <div className="w-[calc(var(--u)*460)] h-[calc(var(--u)*88)] relative font-archivo">
            <TechText
              text="FRONTEND"
              fontWeight={600}
              fontSize={150}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="metrics"
              introDuration={2}
              clickKick
              guides={false}
              fontFamily="Archivo, sans-serif"
              letterSpacing={-0.05}
              accentColor="#ffffff"
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              color="#ffffff"
              align="left"
              draggable
              sweep
            />
          </div>
          <div className="overflow-hidden mt-1">
            <h1
              className={`font-archivo uppercase leading-[0.86] text-[calc(var(--u)*74)] text-[#111111] [font-stretch:104%] [font-weight:640] [letter-spacing:-0.06em] transition-transform duration-1000 delay-[110ms] ${loaded ? "translate-y-0" : "translate-y-full"}`}
            >
              DEVELOPER
            </h1>
          </div>
        </div>

        <aside
          className={`absolute z-20 flex flex-col items-start left-[calc(var(--u)*57)] top-[calc(var(--u)*458)] transition-all duration-700 ease-out delay-[240ms] ${loaded ? "translate-y-0 opacity-100" : "translate-y-[calc(var(--u)*14)] opacity-0"}`}
        >
          <span className="font-interTight font-semibold flex items-center gap-1.5 uppercase text-[calc(var(--u)*13)] text-[#111111] [letter-spacing:0.04em]">
            <span className="rounded-full bg-[#111111] w-[calc(var(--u)*6)] h-[calc(var(--u)*6)]" />
            (ABOUT)
          </span>

          <p className="font-interTight font-normal leading-[1.45] mt-3 text-[#2a2a2a] text-[calc(var(--u)*14)] max-w-[calc(var(--u)*320)]">
            Engineering responsive, pixel-perfect web interfaces with React,
            Next.js, and TypeScript. Focused on scalable architecture and fluid
            UX.
          </p>

          <button
            type="button"
            onClick={() => scrollToId("projects")}
            className="flex items-center justify-between gap-4 pl-5 pr-2 bg-[#111111] text-white rounded-[18px] font-interTight font-medium transition-transform duration-200 hover:-translate-y-px cursor-pointer mt-[calc(var(--u)*38)]  h-[calc(var(--u)*44)] text-[calc(var(--u)*14)] shadow-[0_calc(var(--u)*4)_calc(var(--u)*12)_rgba(0,0,0,0.12)]"
          >
            Explore Projects
            <div className="bg-zinc-800 p-4 pb-5 rounded-[12px] flex items-center gap-2">
              <div className="rounded-full w-[4px] h-[8px] bg-white"></div>
              <div className="rounded-full w-[4px] h-[8px] bg-white"></div>
            </div>
          </button>
        </aside>

        <div
          className={`absolute z-20 flex flex-col items-center left-1/2 -translate-x-1/2 top-[calc(var(--u)*165)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms] ${loaded ? "translate-y-0 opacity-100" : "translate-y-[calc(var(--u)*20)] opacity-0"}`}
        >
          <div className="rounded-3xl border border-[#111111]/15 bg-white/40 backdrop-blur-md p-3 shadow-xl hover:shadow-2xl transition-all shadow-[0_calc(var(--u)*16)_calc(var(--u)*40)_rgba(0,0,0,0.08)]">
            <Mascot
              directions="/mascots/rafid-directions.webp"
              reactions="/mascots/rafid-reactions.webp"
              size="calc(var(--u) * 240)"
              className="rounded-2xl"
              alt="Mostafa Al Rafid Interactive Avatar"
            />
          </div>

          <div className="z-20 flex items-center justify-center w-fit -mt-14 transition-all duration-700">
            <span className="!font-bricolage font-bold text-[#0F42C0] text-[calc(var(--u)*59)] [font-stretch:120%] text-center whitespace-nowrap">
              Mostafa Al Rafid
            </span>
          </div>
        </div>

        <div
          className={`absolute z-20 flex gap-2 left-[calc(var(--u)*57)] top-[calc(var(--u)*693)] w-[calc(var(--u)*341)] h-[calc(var(--u)*208)] bg-[#cdcdcd] rounded-[calc(var(--u)*14)] p-[calc(var(--u)*8)] transition-all duration-700 ease-out delay-[360ms] ${loaded ? "translate-y-0 opacity-100" : "translate-y-[calc(var(--u)*14)] opacity-0"}`}
        >
          <div className="flex-1 bg-[#161616] text-white flex flex-col justify-between rounded-[calc(var(--u)*10)] p-[calc(var(--u)*12)]">
            <div>
              <div className="font-archivo font-bold text-white leading-none text-[calc(var(--u)*26)]">
                {countExp}+ Years
              </div>
              <div className="font-interTight font-medium text-[#999999] mt-0.5 text-[calc(var(--u)*11)]">
                Frontend Experience
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToId("experience")}
              className="w-full bg-white text-[#111111] flex items-center justify-center font-interTight font-semibold hover:bg-[#eaeaea] transition-colors cursor-pointer rounded-[calc(var(--u)*6)] py-[calc(var(--u)*6)] text-[calc(var(--u)*11)]"
            >
              View experience ↗
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setQHovered(true)}
          onMouseLeave={() => setQHovered(false)}
          onClick={() => scrollToId("projects")}
          className={`absolute z-20 flex flex-col cursor-pointer group left-[calc(var(--u)*1216)] top-[calc(var(--u)*442)] w-[calc(var(--u)*168)] transition-all duration-700 ease-out delay-[320ms] ${loaded ? "translate-y-0 opacity-100" : "translate-y-[calc(var(--u)*14)] opacity-0"}`}
        >
          <div className="flex items-center justify-between text-[#111111] font-interTight font-medium mb-1.5 text-[calc(var(--u)*11)]">
            <span>Featured</span>
            <span className="text-[#555555]">[2025]</span>
          </div>
          <div className="font-archivo font-bold text-[#111111] uppercase mb-2 leading-none text-[calc(var(--u)*14)]">
            Diff Editor
          </div>

          <div className="relative overflow-hidden w-[calc(var(--u)*168)] h-[calc(var(--u)*196)] rounded-[calc(var(--u)*12)] bg-[#222222]">
            <img
              src={diffImg}
              alt="Diff Editor project preview"
              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${qHovered ? "scale-115" : "scale-100"}`}
            />

            <div
              className={`absolute flex items-center justify-center rounded-full text-white transition-transform duration-300 right-[calc(var(--u)*12)] bottom-[calc(var(--u)*16)] w-[calc(var(--u)*36)] h-[calc(var(--u)*36)] bg-white/30 backdrop-blur-md border border-white/40 ${qHovered ? "rotate-45" : "rotate-0"}`}
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-[calc(var(--u)*14)] h-[calc(var(--u)*14)]"
              >
                <path d="M4 12L12 4M12 4H6M12 4V10" />
              </svg>
            </div>

            <div className="absolute left-0 right-0 bottom-0 h-[calc(var(--u)*3)] bg-white/35">
              <div
                className={`h-full bg-white transition-all duration-1000 ease-out ${loaded ? "w-full" : "w-0"}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col w-full px-5 pt-6 pb-10">
        <header className="w-full flex items-center justify-end mb-8 pt-1">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact", -72, 7.5);
            }}
            aria-label="Contact"
            className="flex items-center justify-center bg-[#111111] text-white rounded-full font-interTight font-bold transition-transform active:scale-95 cursor-pointer w-[calc(var(--u)*40)] h-[calc(var(--u)*40)] text-[calc(var(--u)*18)]"
          >
            ↗
          </a>
        </header>

        <div className="mb-6">
          <div className="w-full h-[calc(var(--u)*55)] relative font-archivo">
            <TechText
              text="FRONTEND"
              fontWeight={600}
              fontSize={150}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="metrics"
              introDuration={2}
              clickKick
              guides={false}
              fontFamily="Archivo, sans-serif"
              letterSpacing={-0.05}
              accentColor="#ffffff"
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              color="#ffffff"
              align="left"
              draggable
              sweep
            />
          </div>
          <h1 className="font-archivo font-bold uppercase leading-[0.88] text-[calc(var(--u)*48)] text-[#111111] [font-stretch:104%] [font-weight:640] [letter-spacing:-0.05em] mt-1">
            DEVELOPER
          </h1>
        </div>

        <aside className="flex flex-col items-start mb-6">
          <span className="font-interTight font-semibold flex items-center gap-1.5 uppercase text-[#111111] text-[calc(var(--u)*12)] [letter-spacing:0.04em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            (ABOUT)
          </span>
          <p className="font-interTight font-normal leading-[1.45] mt-2 text-[#2a2a2a] text-[calc(var(--u)*14)]">
            Engineering responsive, pixel-perfect web interfaces with React,
            Next.js, and TypeScript.
          </p>
          <button
            type="button"
            onClick={() => scrollToId("projects")}
            className="mt-4 inline-flex items-center justify-center bg-[#111111] text-white rounded-full font-interTight font-medium px-6 py-2.5 cursor-pointer text-[calc(var(--u)*13)]"
          >
            Explore Projects ↗
          </button>
        </aside>

        <div className="w-full flex flex-col items-center justify-center my-6">
          <div className="rounded-2xl border border-[#111111]/15 bg-white/40 backdrop-blur-md p-2.5 shadow-lg">
            <Mascot
              directions="/mascots/rafid-directions.webp"
              reactions="/mascots/rafid-reactions.webp"
              size={190}
              className="rounded-xl"
              alt="Mostafa Al Rafid Interactive Avatar"
            />
          </div>

          <div className="z-20 flex items-center justify-center w-fit mt-3 transition-all duration-700">
            <span className="font-founderGrotest font-bold text-[#111111] uppercase text-[calc(var(--u)*24)] [font-stretch:120%] [letter-spacing:0.14em] text-center">
              MOSTAFA AL RAFID
            </span>
          </div>
        </div>

        <div className="w-full flex gap-2.5 mb-8 bg-[#cdcdcd] rounded-[calc(var(--u)*14)] p-[calc(var(--u)*8)]">
          <div className="flex-1 bg-[#161616] text-white flex flex-col justify-between p-3.5 rounded-xl">
            <div>
              <div className="font-archivo font-bold leading-none text-[calc(var(--u)*22)]">
                {countExp}+ Years
              </div>
              <div className="font-interTight font-medium text-[#999999] mt-0.5 text-[calc(var(--u)*10)]">
                Frontend Craft
              </div>
            </div>
            <button
              type="button"
              onClick={() => scrollToId("experience")}
              className="w-full bg-white text-[#111111] flex items-center justify-center font-interTight font-semibold py-1 rounded text-center mt-3 cursor-pointer text-[calc(var(--u)*10)]"
            >
              Experience ↗
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between text-[#111111] font-interTight font-medium mb-1 text-xs">
            <span>Featured</span>
            <span className="text-[#555555]">[2025]</span>
          </div>
          <div className="font-archivo font-bold text-[#111111] uppercase mb-2 text-sm">
            Diff Editor
          </div>
          <div
            onClick={() => scrollToId("projects")}
            className="relative w-full overflow-hidden rounded-xl cursor-pointer h-[calc(var(--u)*220)]"
          >
            <img
              src={diffImg}
              alt="Diff Editor preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center justify-center rounded-full text-white right-3 bottom-3 w-9 h-9 bg-white/30 backdrop-blur-md border border-white/50">
              ↗
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialHero;
