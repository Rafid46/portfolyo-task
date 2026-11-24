import { useEffect, useRef } from "react";

const STATEMENT_WORDS = [
  "I",
  "am",
  "a",
  "Frontend",
  "Developer",
  "specializing",
  "primarily",
  "in",
  "Next.js",
  "and",
  "React,",
  "crafting",
  "responsive,",
  "high-performance",
  "web",
  "applications",
  "with",
  "precision,",
  "scalable",
  "architecture,",
  "and",
  "fluid",
  "user",
  "experiences.",
];

const EditorialManifesto = ({ isWarm = false }) => {
  const statementRef = useRef(null);
  const wordRefs = useRef([]);
  const isWarmRef = useRef(isWarm);
  const progressRef = useRef(0);

  useEffect(() => {
    isWarmRef.current = isWarm;
    const total = STATEMENT_WORDS.length;
    const fillPoint = progressRef.current * (total + 3);
    for (let idx = 0; idx < total; idx += 1) {
      const el = wordRefs.current[idx];
      if (!el) continue;
      const distance = fillPoint - idx;
      const ratio = Math.max(0, Math.min(distance / 3, 1));
      if (isWarm) {
        const r = Math.round(184 + ratio * (35 - 184));
        const g = Math.round(170 + ratio * (23 - 170));
        const b = Math.round(158 + ratio * (18 - 158));
        el.style.color = `rgb(${r}, ${g}, ${b})`;
      } else {
        const r = Math.round(92 + ratio * (244 - 92));
        const g = Math.round(92 + ratio * (244 - 92));
        const b = Math.round(98 + ratio * (240 - 98));
        el.style.color = `rgb(${r}, ${g}, ${b})`;
      }
    }
  }, [isWarm]);

  useEffect(() => {
    const paintWords = (progress) => {
      progressRef.current = progress;
      const warm = isWarmRef.current;
      const total = STATEMENT_WORDS.length;
      const fillPoint = progress * (total + 3);
      for (let idx = 0; idx < total; idx += 1) {
        const el = wordRefs.current[idx];
        if (!el) continue;
        const distance = fillPoint - idx;
        const ratio = Math.max(0, Math.min(distance / 3, 1));
        if (warm) {
          const r = Math.round(184 + ratio * (35 - 184));
          const g = Math.round(170 + ratio * (23 - 170));
          const b = Math.round(158 + ratio * (18 - 158));
          el.style.color = `rgb(${r}, ${g}, ${b})`;
        } else {
          const r = Math.round(92 + ratio * (244 - 92));
          const g = Math.round(92 + ratio * (244 - 92));
          const b = Math.round(98 + ratio * (240 - 98));
          el.style.color = `rgb(${r}, ${g}, ${b})`;
        }
      }
    };

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReduced) {
      paintWords(1);
      return undefined;
    }

    let rafId = 0;
    const update = () => {
      rafId = 0;
      if (!statementRef.current) return;
      const rect = statementRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = rect.height + winH * 0.45;
      const current = winH * 0.85 - rect.top;
      const p = Math.max(0, Math.min(current / total, 1));
      paintWords(p);
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="manifesto"
      ref={statementRef}
      aria-label="Manifesto"
      className="w-full bg-transparent  px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <span
            className={`text-xs font-mono uppercase transition-colors duration-700 ${
              isWarm ? "text-[#D94826]" : "text-teal-400"
            }`}
          >
            01 — Philosophy
          </span>
          <span
            className={`text-xs font-mono uppercase transition-colors duration-700 ${
              isWarm ? "text-[#6F5D52]" : "text-zinc-500"
            }`}
          >
            Craft &amp; Precision
          </span>
        </div>

        <p className="font-interTight font-medium text-[clamp(1.65rem,3.6vw,3.4rem)] leading-[1.28] [letter-spacing:-0.025em]">
          {STATEMENT_WORDS.map((word, idx) => (
            <span
              key={`${word}-${idx}`}
              ref={(el) => {
                wordRefs.current[idx] = el;
              }}
              className="inline-block mr-[0.28em] transition-colors duration-500"
              style={{ color: "rgb(92, 92, 98)" }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default EditorialManifesto;
