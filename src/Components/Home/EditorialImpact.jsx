import React, { useEffect, useRef, useState } from "react";
import project6 from "../../assets/project6.png";

const TECH_PILLS = [
  "React", "Next.js", "TypeScript", "Tailwind",
  "Zustand", "TanStack", "Redux", "Node.js"
];

const DELAY_CLASSES = [
  "delay-[0ms]", "delay-[45ms]", "delay-[90ms]", "delay-[135ms]",
  "delay-[180ms]", "delay-[225ms]", "delay-[270ms]", "delay-[315ms]"
];

const EditorialImpact = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [countExp, setCountExp] = useState(0);
  const [countPerf, setCountPerf] = useState(0);
  const [cardLift, setCardLift] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isRec = window.location.search.includes("rec=1");

    if (isReduced) {
      setPanelVisible(true);
      setCountExp(2);
      setCountPerf(100);
      return;
    }

    if (isRec) {
      const timerPanel = setTimeout(() => {
        setPanelVisible(true);
        const tStart = performance.now();
        const tDur = 1700;
        const anim = (now) => {
          const p = Math.min((now - tStart) / tDur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCountExp(Math.floor(ease * 2));
          setCountPerf(Math.floor(ease * 100));
          if (p < 1) requestAnimationFrame(anim);
          else {
            setCountExp(2);
            setCountPerf(100);
          }
        };
        requestAnimationFrame(anim);
      }, 3500);

      const timerLift = setTimeout(() => {
        setCardLift(true);
      }, 5300);

      return () => {
        clearTimeout(timerPanel);
        clearTimeout(timerLift);
      };
    }

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            setPanelVisible(true);
            const tStart = performance.now();
            const tDur = 1400;
            const anim = (now) => {
              const p = Math.min((now - tStart) / tDur, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              setCountExp(Math.floor(ease * 2));
              setCountPerf(Math.floor(ease * 100));
              if (p < 1) requestAnimationFrame(anim);
              else {
                setCountExp(2);
                setCountPerf(100);
              }
            };
            requestAnimationFrame(anim);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={panelRef}
      aria-label="Engineering impact and standards"
      className="w-full bg-black flex justify-center pb-[calc(var(--u)*150)] px-[calc(var(--u)*57)]"
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden w-full max-w-[calc(var(--u)*1302)] min-h-[calc(var(--u)*429)] rounded-[calc(var(--u)*14)] border border-white/30 bg-[#101010]/65 p-[calc(var(--u)*44)]">
        <div className="flex-1 relative z-10 flex flex-col justify-between pr-4 mb-8 lg:mb-0 w-full max-w-[calc(var(--u)*520)]">
          <div className="relative">
            <h2 className="font-interTight font-medium text-[#f4f4f4] leading-[1.08] text-[calc(var(--u)*55)]">
              Engineering
              <br />
              High Performance
              <br />
              Web Interfaces
            </h2>

            <div className="absolute flex items-center justify-center rounded-[calc(var(--u)*12)] text-white right-[calc(var(--u)*40)] top-[calc(var(--u)*4)] w-[calc(var(--u)*88)] h-[calc(var(--u)*88)] bg-white/[0.08] backdrop-blur-[14px] border border-white/20 shadow-2xl">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-[calc(var(--u)*36)] h-[calc(var(--u)*36)]"
              >
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
              </svg>
            </div>

            <div className="hidden md:flex absolute items-center justify-center rounded-[calc(var(--u)*12)] text-white left-[calc(var(--u)*290)] -bottom-[calc(var(--u)*12)] w-[calc(var(--u)*88)] h-[calc(var(--u)*88)] bg-white/[0.08] backdrop-blur-[14px] border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-2">
                <span className="rounded-full bg-white w-[calc(var(--u)*8)] h-[calc(var(--u)*8)]" />
                <span className="rounded-full bg-white w-[calc(var(--u)*8)] h-[calc(var(--u)*8)]" />
                <span className="rounded-full bg-white w-[calc(var(--u)*8)] h-[calc(var(--u)*8)]" />
                <span className="rounded-full bg-white w-[calc(var(--u)*8)] h-[calc(var(--u)*8)]" />
              </div>
            </div>
          </div>

          <p className="font-interTight font-normal text-[#888888] mt-6 text-[calc(var(--u)*14.5)] leading-[1.5] max-w-[calc(var(--u)*420)]">
            Developing production-ready web applications with clean architecture, accessible components, and seamless animations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto justify-start lg:justify-end overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          <div className="bg-[#d6d6d6] text-[#111111] flex flex-col justify-between shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1.5 w-full sm:w-[calc(var(--u)*293)] h-[calc(var(--u)*326)] rounded-[calc(var(--u)*8)] p-[calc(var(--u)*24)]">
            <div className="grid grid-cols-2 gap-2">
              {TECH_PILLS.map((tech, i) => (
                <div
                  key={tech}
                  className={`rounded-lg bg-neutral-900 text-white flex items-center justify-center font-interTight font-medium text-center h-[calc(var(--u)*44)] text-[calc(var(--u)*12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${DELAY_CLASSES[i] || ""} ${panelVisible ? "scale-100 opacity-100" : "scale-[0.6] opacity-0"}`}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <div className="font-archivo font-bold text-[#111111] leading-none text-[calc(var(--u)*43)]">
                {countPerf}%
              </div>
              <div className="font-interTight font-medium text-[#444444] mt-1 text-[calc(var(--u)*13)]">
                Focus on Performance
              </div>
            </div>
          </div>

          <div className={`bg-[#262626] text-white flex flex-col justify-between shrink-0 transition-all duration-300 ease-out hover:-translate-y-1.5 w-full sm:w-[calc(var(--u)*298)] h-[calc(var(--u)*326)] rounded-[calc(var(--u)*8)] p-[calc(var(--u)*24)] ${cardLift ? "-translate-y-[calc(var(--u)*6)]" : "translate-y-0"}`}>
            <div>
              <div className="font-archivo font-bold text-white leading-none text-[calc(var(--u)*36)]">
                {countExp}+ Years
              </div>
              <div className="font-interTight font-medium text-[#999999] mt-1 text-[calc(var(--u)*13)]">
                Production Experience
              </div>
            </div>

            <div className="my-auto flex flex-col items-center justify-center text-center py-2">
              <svg
                viewBox="0 0 100 60"
                fill="none"
                className="text-white/80 w-[calc(var(--u)*90)] h-[calc(var(--u)*48)]"
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
              <span className="font-archivo font-semibold uppercase text-white/90 text-center mt-1 text-[calc(var(--u)*10)] [letter-spacing:0.12em]">
                CLEAN CODE & BEST PRACTICES
              </span>
            </div>

            <p className="font-interTight font-normal text-[#888888] leading-snug text-[calc(var(--u)*12)]">
              Hands-on experience shipping commercial web apps with Next.js, Zustand, and modern UI engineering.
            </p>
          </div>

          <div className="shrink-0 overflow-hidden hidden sm:block relative bg-[#202020] rounded-[calc(var(--u)*8)] -mr-[calc(var(--u)*60)] w-[calc(var(--u)*200)] h-[calc(var(--u)*326)]">
            <img
              src={project6}
              alt="Acadizo learning platform project preview"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="font-archivo text-xs text-white uppercase [letter-spacing:0.08em]">
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