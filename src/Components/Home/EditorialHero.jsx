import { useEffect, useRef, useState } from "react";
import { scrollToId } from "../../lib/smoothScroll";
import Mascot from "../Mascot/Mascot";
import TechText from "./TechText";
import GooeyNav from "./GooeyNav";
import Magnetic from "../motion/Magnetic";
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

const SHOW_EXP_CARD = false;

const EditorialHero = ({ isWarmSection = false }) => {
  const [activeNavIdx, setActiveNavIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [countExp, setCountExp] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const isNavClickRef = useRef(false);
  const navClickTimerRef = useRef(null);

  const isDark = scrollY > 280 && !isWarmSection;

  const handleNavChange = (index, item) => {
    setActiveNavIdx(index);
    isNavClickRef.current = true;
    if (navClickTimerRef.current) clearTimeout(navClickTimerRef.current);

    const unlock = () => {
      isNavClickRef.current = false;
    };

    const duration = item.label === "Contact" ? 1.4 : 1.2;
    navClickTimerRef.current = setTimeout(unlock, duration * 1000 + 100);

    if (item.label === "Home") {
      scrollToId("home", -72, duration, unlock);
    } else if (item.label === "Work") {
      scrollToId("experience", -72, duration, unlock);
    } else if (item.label === "About") {
      scrollToId("manifesto", -72, duration, unlock);
    } else if (item.label === "Contact") {
      scrollToId("contact", 0, duration, unlock);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (isNavClickRef.current) return;

      const contactEl = document.getElementById("contact");
      const experienceEl = document.getElementById("experience");
      const manifestoEl = document.getElementById("manifesto");

      const scrollBottom = y + window.innerHeight;
      const isNearBottom =
        scrollBottom >= document.documentElement.scrollHeight - 150 ||
        (contactEl && y >= contactEl.offsetTop - 100);

      if (isNearBottom) {
        setActiveNavIdx(3);
      } else if (experienceEl && y + 300 >= experienceEl.offsetTop) {
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
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (navClickTimerRef.current) clearTimeout(navClickTimerRef.current);
      };
    }

    setLoaded(true);
    const start = performance.now();
    const duration = 1400;
    let rafId = 0;

    const animateCounters = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCountExp(Math.floor(ease * 2));
      setCountProjects(Math.floor(ease * 10));
      if (progress < 1) {
        rafId = requestAnimationFrame(animateCounters);
      } else {
        setCountExp(2);
        setCountProjects(10);
      }
    };
    rafId = requestAnimationFrame(animateCounters);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      if (navClickTimerRef.current) clearTimeout(navClickTimerRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full overflow-hidden min-h-[calc(var(--u)*938)] pb-[calc(var(--u)*40)] md:pb-0 bg-transparent"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[#dadada] transition-opacity duration-700 ease-out ${
          isDark || isWarmSection ? "opacity-0" : "opacity-100"
        }`}
        style={{
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 75%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          isDark ? "opacity-25" : "opacity-[0.06]"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 78%, transparent 100%)",
        }}
      />

      <header className="fixed z-50 transition-all duration-700 ease-out left-4 md:left-[calc(var(--u)*57)] top-4 md:top-[calc(var(--u)*40)]">
        <div className="rounded-full p-1">
          <GooeyNav
            items={NAV_ITEMS}
            initialActiveIndex={0}
            activeIndex={activeNavIdx}
            theme={isDark && !isWarmSection ? "dark" : "light"}
            color={isDark && !isWarmSection ? "#ffffffff" : "#383737ff"}
            size="lg"
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
        <div
          className={`absolute z-20 left-1/2 -translate-x-1/2 top-[calc(var(--u)*54)] flex items-center gap-4 text-[calc(var(--u)*11)] font-mono uppercase transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          } ${isDark ? "text-zinc-400" : "text-[#444444]"}`}
        >
          <span>Available .</span>
          <span>Dhaka, BD</span>
          <span className="opacity-40">/</span>
          <span>[2026]</span>
        </div>

        <header className="w-full">
          <div className="flex items-center">
            <div
              className={`absolute z-30 transition-all duration-700 ease-out left-[calc(var(--u)*1195)] top-[calc(var(--u)*46)] ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[calc(var(--u)*14)] opacity-0"
              }`}
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
              className={`font-archivo uppercase leading-[0.86] text-[calc(var(--u)*74)] [font-stretch:104%] [font-weight:640] [letter-spacing:-0.06em] transition-all duration-1000 delay-[110ms] ${
                loaded ? "translate-y-0" : "translate-y-full"
              } ${isDark ? "text-[#f4f4f0]" : "text-[#111111]"}`}
            >
              DEVELOPER
            </h1>
          </div>
        </div>

        <aside
          className={`absolute z-20 flex flex-col items-start left-[calc(var(--u)*57)] top-[calc(var(--u)*458)] transition-all duration-700 ease-out delay-[240ms] ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-[calc(var(--u)*14)] opacity-0"
          }`}
        >
          <span
            className={`font-mono font-semibold flex items-center gap-1.5 uppercase text-[calc(var(--u)*12)] [letter-spacing:0.06em] transition-colors duration-500 ${
              isDark ? "text-[#f4f4f0]" : "text-[#111111]"
            }`}
          >
            <span
              className={`rounded-full w-[calc(var(--u)*6)] h-[calc(var(--u)*6)] ${
                isDark ? "bg-teal-400" : "bg-[#111111]"
              }`}
            />
            [ ABOUT ]
          </span>

          <p
            className={`font-interTight font-normal leading-[1.45] mt-3 text-[calc(var(--u)*14)] max-w-[calc(var(--u)*320)] transition-colors duration-500 ${
              isDark ? "text-zinc-300" : "text-[#2a2a2a]"
            }`}
          >
            Frontend Developer specializing primarily in Next.js and React.
            Engineering responsive, high-performance web applications with
            scalable architecture and fluid UX.
          </p>

          <div
            className={`flex items-center gap-2 mt-3.5 transition-colors duration-500 ${
              isDark ? "text-zinc-400" : "text-[#444444]"
            }`}
          >
            {TECH_MARKS.map((mark) => (
              <span
                key={mark.name}
                title={mark.name}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[calc(var(--u)*10)] font-mono ${
                  isDark
                    ? "border-white/15 bg-white/5 text-zinc-300"
                    : "border-[#111111]/15 bg-white/40 text-[#222222]"
                }`}
              >
                <svg
                  viewBox="0 0 14 14"
                  fill="currentColor"
                  className="w-[calc(var(--u)*10)] h-[calc(var(--u)*10)]"
                  aria-hidden="true"
                >
                  <path d={mark.glyph} />
                </svg>
                <span>{mark.name}</span>
              </span>
            ))}
          </div>
        </aside>

        <div
          className={`group absolute z-20 flex flex-col items-center left-1/2 -translate-x-1/2 top-[calc(var(--u)*165)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms] ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-[calc(var(--u)*20)] opacity-0"
          }`}
        >
          <div className="relative rounded-3xl border border-[#111111]/15 bg-white/45 backdrop-blur-[8px] p-3 shadow-xl hover:shadow-2xl transition-shadow shadow-[0_calc(var(--u)*16)_calc(var(--u)*40)_rgba(0,0,0,0.08)]">
            <span
              aria-hidden="true"
              className="absolute -top-2 -left-2 text-[calc(var(--u)*11)] font-mono text-[#111111]/45"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute -top-2 -right-2 text-[calc(var(--u)*11)] font-mono text-[#111111]/45"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 text-[calc(var(--u)*11)] font-mono text-[#111111]/45"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 text-[calc(var(--u)*11)] font-mono text-[#111111]/45"
            >
              +
            </span>
            <Mascot
              directions="/mascots/rafid-directions.webp"
              reactions="/mascots/rafid-reactions.webp"
              size="calc(var(--u) * 240)"
              className="rounded-2xl"
              alt="Mostafa Al Rafid Interactive Avatar"
            />
          </div>

          <div className="z-20 flex flex-col items-center justify-center w-fit -mt-14 transition-all duration-700">
            <span className="!font-bricolage font-bold text-[#0F42C0] text-[calc(var(--u)*59)] [font-stretch:120%] text-center whitespace-nowrap">
              Mostafa Al Rafid
            </span>
            <span
              className={`text-[calc(var(--u)*10)] font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 ${
                isDark ? "text-zinc-400" : "text-[#444444]"
              }`}
            >
              [ Tap to interact ]
            </span>
          </div>
        </div>

        {SHOW_EXP_CARD && (
          <div
            className={`group/exp absolute z-20 right-[calc(var(--u)*57)] top-[calc(var(--u)*446)] w-[calc(var(--u)*242)] transition-all duration-700 ease-out delay-[320ms] ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-[calc(var(--u)*14)] opacity-0"
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[calc(var(--u)*18)] bg-[#9D8CF5] border-2 border-[#111111] -rotate-3 group-hover/exp:-rotate-6 group-hover/exp:-translate-x-1 transition-transform duration-300"
            />

            <div
              onClick={() => scrollToId("experience")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToId("experience");
                }
              }}
              aria-label="View 2+ Years Frontend Experience"
              className="relative rounded-[calc(var(--u)*18)] bg-[#F2B418] text-[#111111] border-2 border-[#111111] p-[calc(var(--u)*16)] flex flex-col justify-between gap-[calc(var(--u)*12)] rotate-[1.5deg] group-hover/exp:rotate-0 group-hover/exp:-translate-y-1 shadow-[calc(var(--u)*6)_calc(var(--u)*6)_0px_#111111] group-hover/exp:shadow-[calc(var(--u)*8)_calc(var(--u)*8)_0px_#0F42C0] transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -top-[calc(var(--u)*13)] left-[calc(var(--u)*14)] inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0F42C0] text-white border-2 border-[#111111] text-[calc(var(--u)*10)] font-mono font-bold -rotate-3 group-hover/exp:rotate-0 transition-transform shadow-[2px_2px_0px_#111111]">
                <svg
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-[calc(var(--u)*9)] h-[calc(var(--u)*9)]"
                >
                  <path d="M1 1l4 10 1.6-3.8L10.5 5.5 1 1z" />
                </svg>
                <span>2024–NOW</span>
              </div>

              <div className="flex items-start justify-between pt-1">
                <span className="font-mono font-bold text-[calc(var(--u)*12)] text-[#111111]/75">
                  01
                </span>
                <span className="w-[calc(var(--u)*36)] h-[calc(var(--u)*36)] rounded-full border-2 border-dashed border-[#D94826] bg-[#FFFDF9] flex items-center justify-center group-hover/exp:scale-110 group-hover/exp:rotate-12 transition-transform">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="w-[calc(var(--u)*18)] h-[calc(var(--u)*18)]"
                  >
                    <path
                      d="M12 3l2.2 4.8L19.5 9l-3.8 3.6.9 5.2L12 15.3l-4.6 2.5.9-5.2L4.5 9l5.3-1.2L12 3z"
                      fill="#F2B418"
                      stroke="#D94826"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div>
                <div className="!font-bricolage font-bold text-[#111111] leading-none text-[calc(var(--u)*34)]">
                  {countExp}+ Years
                </div>
                <div className="font-interTight font-semibold text-[#111111]/80 mt-1 text-[calc(var(--u)*12)]">
                  Frontend Experience
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  <span className="px-2 py-0.5 rounded-full bg-[#FFFDF9] border border-[#111111] text-[calc(var(--u)*10)] font-mono font-semibold text-[#111111]">
                    React · Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-[#111111] text-[calc(var(--u)*10)] font-mono font-semibold text-[#111111]">
                    Production
                  </span>
                </div>
              </div>

              <Magnetic strength={0.2} radius={60}>
                <div className="w-full bg-[#111111] group-hover/exp:bg-[#0F42C0] text-white flex items-center justify-between px-3.5 py-[calc(var(--u)*8)] rounded-full font-interTight font-semibold transition-colors text-[calc(var(--u)*12)]">
                  <span>Experience</span>
                  <span className="inline-block group-hover/exp:translate-x-0.5 group-hover/exp:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </Magnetic>
            </div>
          </div>
        )}

        {!SHOW_EXP_CARD && (
          <div
            className={`group/proj absolute z-20 right-[calc(var(--u)*57)] top-[calc(var(--u)*446)] w-[calc(var(--u)*258)] transition-all duration-700 ease-out delay-[320ms] ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-[calc(var(--u)*14)] opacity-0"
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-[#6EE7B7] border-2 border-[#111111] -rotate-[5deg] -translate-x-1.5 translate-y-1 group-hover/proj:-rotate-[9deg] group-hover/proj:-translate-x-3.5 transition-transform duration-300"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-[#9D8CF5] border-2 border-[#111111] rotate-[4deg] translate-x-1.5 translate-y-1 group-hover/proj:rotate-[8deg] group-hover/proj:translate-x-3.5 transition-transform duration-300"
            />

            <div
              onClick={() => scrollToId("projects")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToId("projects");
                }
              }}
              aria-label="Explore Featured Projects"
              className="relative rounded-xl bg-[#FFFDF9] text-[#111111] border-2 border-[#111111] p-[calc(var(--u)*18)] flex flex-col justify-between gap-[calc(var(--u)*14)] group-hover/proj:-translate-y-1.5 shadow-[calc(var(--u)*6)_calc(var(--u)*6)_0px_#111111] group-hover/proj:shadow-[calc(var(--u)*10)_calc(var(--u)*10)_0px_#0F42C0] transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -top-[calc(var(--u)*13)] left-[calc(var(--u)*16)] inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D94826] text-[#FFFDF9] border-2 border-[#111111] text-[calc(var(--u)*10)] font-mono font-bold -rotate-2 group-hover/proj:rotate-0 transition-transform shadow-[2px_2px_0px_#111111]">
                <span className="w-[calc(var(--u)*6)] h-[calc(var(--u)*6)] rounded-full bg-[#F2B418]" />
                <span>SELECTED · WORK</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-mono font-bold text-[calc(var(--u)*11)] text-[#111111]/65">
                  {countProjects}+ BUILT
                </span>
                <div className="flex items-center -space-x-1.5">
                  <span className="w-[calc(var(--u)*14)] h-[calc(var(--u)*14)] rounded-full bg-[#1548EB] border-2 border-[#111111]" />
                  <span className="w-[calc(var(--u)*14)] h-[calc(var(--u)*14)] rounded-full bg-[#D94826] border-2 border-[#111111]" />
                  <span className="w-[calc(var(--u)*14)] h-[calc(var(--u)*14)] rounded-full bg-[#6EE7B7] border-2 border-[#111111]" />
                </div>
              </div>

              <div>
                <div className="!font-bricolage font-bold text-[#111111] leading-[1.05] text-[calc(var(--u)*26)]">
                  Explore Projects
                </div>
                <p className="font-interTight text-[#111111]/70 mt-1 text-[calc(var(--u)*11)]">
                  Hand-crafted apps &amp; dev tools
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F9F0E8] border border-[#111111] text-[calc(var(--u)*10)] font-mono font-semibold text-[#111111] -rotate-1 group-hover/proj:rotate-0 transition-transform">
                    Acadizo
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F2B418]/45 border border-[#111111] text-[calc(var(--u)*10)] font-mono font-semibold text-[#111111] rotate-1 group-hover/proj:rotate-0 transition-transform">
                    Diffy
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#6EE7B7]/55 border border-[#111111] text-[calc(var(--u)*10)] font-mono font-semibold text-[#111111] -rotate-1 group-hover/proj:rotate-0 transition-transform">
                    Hane
                  </span>
                </div>
              </div>

              <Magnetic strength={0.22} radius={70}>
                <div className="w-full bg-[#111111] group-hover/proj:bg-[#0F42C0] text-white flex items-center justify-between pl-4 pr-1.5 py-[calc(var(--u)*6)] rounded-full font-interTight font-semibold transition-colors text-[calc(var(--u)*12)]">
                  <span>View Showcase</span>
                  <span className="w-[calc(var(--u)*26)] h-[calc(var(--u)*26)] rounded-full bg-[#F2B418] text-[#111111] flex items-center justify-center font-bold group-hover/proj:rotate-45 transition-transform">
                    ↗
                  </span>
                </div>
              </Magnetic>
            </div>
          </div>
        )}
      </div>

      <div className="flex md:hidden flex-col w-full px-5 pt-6 pb-10 relative z-20">
        <header className="w-full flex items-center justify-between mb-8 pt-1">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase ${
              isDark ? "text-zinc-300" : "text-[#333333]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dhaka · [2026]</span>
          </span>
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
          <h1
            className={`font-archivo font-bold uppercase leading-[0.88] text-[calc(var(--u)*48)] [font-stretch:104%] [font-weight:640] [letter-spacing:-0.05em] mt-1 transition-colors duration-500 ${
              isDark ? "text-[#f4f4f0]" : "text-[#111111]"
            }`}
          >
            DEVELOPER
          </h1>
        </div>

        <aside className="flex flex-col items-start mb-6">
          <span
            className={`font-mono font-semibold flex items-center gap-1.5 uppercase text-[calc(var(--u)*12)] [letter-spacing:0.06em] ${
              isDark ? "text-[#f4f4f0]" : "text-[#111111]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />[ ABOUT ]
          </span>
          <p
            className={`font-interTight font-normal leading-[1.45] mt-2 text-[calc(var(--u)*14)] ${
              isDark ? "text-zinc-300" : "text-[#2a2a2a]"
            }`}
          >
            Frontend Developer specializing primarily in Next.js and React,
            crafting responsive, high-performance web applications.
          </p>
        </aside>

        <div className="w-full flex flex-col items-center justify-center my-6">
          <div className="rounded-2xl border border-[#111111]/15 bg-white/45 backdrop-blur-[8px] p-2.5 shadow-lg">
            <Mascot
              directions="/mascots/rafid-directions.webp"
              reactions="/mascots/rafid-reactions.webp"
              size={190}
              className="rounded-xl"
              alt="Mostafa Al Rafid Interactive Avatar"
            />
          </div>

          <div className="z-20 flex items-center justify-center w-fit mt-3 transition-all duration-700">
            <span className="!font-bricolage font-bold text-[#0F42C0] text-[calc(var(--u)*26)] text-center">
              Mostafa Al Rafid
            </span>
          </div>
        </div>

        <div
          className={`w-full grid gap-3 mb-8 ${
            SHOW_EXP_CARD ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {SHOW_EXP_CARD && (
            <button
              type="button"
              onClick={() => scrollToId("experience")}
              className="text-left bg-[#F2B418] text-[#111111] border-2 border-[#111111] rounded-2xl p-3.5 -rotate-1 active:rotate-0 shadow-[4px_4px_0px_#111111] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-[10px] opacity-70">
                    01
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-[#0F42C0] text-white text-[9px] font-mono font-bold">
                    2024–NOW
                  </span>
                </div>
                <div className="!font-bricolage font-bold leading-none text-[calc(var(--u)*26)]">
                  {countExp}+ Years
                </div>
                <div className="font-interTight font-semibold text-[#111111]/80 mt-1 text-[calc(var(--u)*10)]">
                  Frontend Craft
                </div>
              </div>
              <span className="w-full bg-[#111111] text-white flex items-center justify-between font-interTight font-semibold px-2.5 py-1.5 rounded-full mt-3 text-[calc(var(--u)*10)]">
                <span>Experience</span>
                <span>↗</span>
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={() => scrollToId("projects")}
            className="relative text-left bg-[#FFFDF9] text-[#111111] border-2 border-[#111111] rounded-lg p-4 shadow-[5px_5px_0px_#0F42C0] active:translate-y-0.5 flex flex-col justify-between gap-3 cursor-pointer"
          >
            <div className="flex items-center justify-between w-full">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D94826] text-[#FFFDF9] border border-[#111111] text-[10px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2B418]" />
                SELECTED · WORK
              </span>
              <span className="font-mono font-bold text-[11px] opacity-65">
                {countProjects}+ BUILT
              </span>
            </div>

            <div>
              <div className="!font-bricolage font-bold leading-tight text-[calc(var(--u)*24)]">
                Explore Projects
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="px-2 py-0.5 rounded-full bg-[#F9F0E8] border border-[#111111] text-[10px] font-mono font-semibold">
                  Acadizo
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#F2B418]/45 border border-[#111111] text-[10px] font-mono font-semibold">
                  Diffy
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#6EE7B7]/55 border border-[#111111] text-[10px] font-mono font-semibold">
                  Hane
                </span>
              </div>
            </div>

            <span className="w-full bg-[#111111] text-white flex items-center justify-between font-interTight font-semibold pl-3.5 pr-1.5 py-1.5 rounded-full text-xs">
              <span>View Showcase</span>
              <span className="w-6 h-6 rounded-full bg-[#F2B418] text-[#111111] flex items-center justify-center font-bold">
                ↗
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditorialHero;
