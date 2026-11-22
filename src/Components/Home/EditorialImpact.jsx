import { useEffect, useRef, useState } from "react";
import project6 from "../../assets/project6.png";

const TECH_PILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Zustand",
  "TanStack",
  "Redux",
  "Node.js",
];

const DELAY_CLASSES = [
  "delay-[0ms]",
  "delay-[45ms]",
  "delay-[90ms]",
  "delay-[135ms]",
  "delay-[180ms]",
  "delay-[225ms]",
  "delay-[270ms]",
  "delay-[315ms]",
];

const EditorialImpact = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [countExp, setCountExp] = useState(0);
  const [countPerf, setCountPerf] = useState(0);
  const panelRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isReduced) {
      setPanelVisible(true);
      setCountExp(2);
      setCountPerf(100);
      return undefined;
    }

    let triggered = false;
    let rafId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            setPanelVisible(true);
            const tStart = performance.now();
            const tDur = 1200;
            const anim = (now) => {
              const p = Math.min((now - tStart) / tDur, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              setCountExp(Math.floor(ease * 2));
              setCountPerf(Math.floor(ease * 100));
              if (p < 1) {
                rafId = requestAnimationFrame(anim);
              } else {
                setCountExp(2);
                setCountPerf(100);
              }
            };
            rafId = requestAnimationFrame(anim);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={panelRef}
      aria-label="Engineering impact and standards"
      className="w-full bg-[#08080a] py-16 sm:py-20 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto rounded-2xl border border-white/15 bg-[#111114] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase text-teal-400 block mb-3">
              Engineering Standards
            </span>
            <h2 className="font-archivo font-semibold text-[#f4f4f0] leading-[1.08] text-3xl sm:text-4xl lg:text-5xl">
              High Performance Web Interfaces
              <span className="text-teal-400">.</span>
            </h2>
          </div>

          <p className="font-interTight text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md">
            Developing production-ready web applications with clean architecture,
            accessible semantics, and responsive motion choreography.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#f4f4f0] text-[#08080a] rounded-xl p-5 flex flex-col justify-between min-h-[280px] transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="grid grid-cols-2 gap-2">
              {TECH_PILLS.map((tech, i) => (
                <div
                  key={tech}
                  className={`rounded-md bg-[#111114] text-[#f4f4f0] flex items-center justify-center font-mono text-xs h-9 transition-all duration-500 ${
                    DELAY_CLASSES[i] || ""
                  } ${panelVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="font-archivo font-bold text-[#08080a] leading-none text-4xl">
                {countPerf}%
              </div>
              <div className="font-interTight font-medium text-zinc-600 mt-1 text-xs">
                Focus on Performance
              </div>
            </div>
          </div>

          <div className="bg-[#18181c] border border-white/10 text-[#f4f4f0] rounded-xl p-5 flex flex-col justify-between min-h-[280px] transition-transform duration-300 ease-out hover:-translate-y-1">
            <div>
              <div className="font-archivo font-bold text-[#f4f4f0] leading-none text-3xl sm:text-4xl">
                {countExp}+ Years
              </div>
              <div className="font-interTight font-medium text-zinc-400 mt-1 text-xs">
                Production Experience
              </div>
            </div>

            <div className="my-4 flex flex-col items-center justify-center text-center">
              <svg
                viewBox="0 0 100 60"
                fill="none"
                className="text-teal-400 w-20 h-12"
                aria-hidden="true"
              >
                <path
                  d="M20 50C15 40 15 25 25 15M25 15C22 22 24 30 30 35M18 42C12 32 14 20 22 12M80 50C85 40 85 25 75 15M75 15C78 22 76 30 70 35M82 42C88 32 86 20 78 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M46 30l3 3 5-6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="font-mono uppercase text-zinc-300 text-[10px] mt-2">
                Clean Code &amp; Semantics
              </span>
            </div>

            <p className="font-interTight text-zinc-400 leading-snug text-xs">
              Shipping commercial web apps with Next.js, Zustand, and modern UI engineering.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#18181c] min-h-[280px] group">
            <img
              src={project6}
              alt="Acadizo learning platform project preview"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-4">
              <span className="text-[10px] font-mono uppercase text-teal-400">
                Featured Build
              </span>
              <span className="font-archivo text-sm font-semibold text-[#f4f4f0] uppercase mt-0.5">
                Acadizo Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialImpact;
