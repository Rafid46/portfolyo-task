import React, { useEffect, useRef, useState } from "react";

const STATEMENT_WORDS = [
  "I",
  "engineer",
  "responsive,",
  "high-performance",
  "web",
  "applications",
  "using",
  "React,",
  "Next.js,",
  "and",
  "modern",
  "TypeScript.",
  "Every",
  "interface",
  "is",
  "crafted",
  "with",
  "precision,",
  "scalable",
  "architecture,",
  "and",
  "fluid",
  "user",
  "experiences.",
];

const EditorialManifesto = () => {
  const [statementProgress, setStatementProgress] = useState(0);
  const statementRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReduced) {
      setStatementProgress(1);
      return;
    }

    const handleScroll = () => {
      if (statementRef.current) {
        const rect = statementRef.current.getBoundingClientRect();
        const winH = window.innerHeight;
        const total = rect.height + winH * 0.4;
        const current = winH * 0.8 - rect.top;
        const p = Math.max(0, Math.min(current / total, 1));
        setStatementProgress(p);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="manifesto"
      ref={statementRef}
      aria-label="Manifesto"
      className="w-full bg-black flex flex-col items-center justify-center text-center pt-[calc(var(--u)*170)] pb-[calc(var(--u)*230)] px-[calc(var(--u)*40)]"
    >
      <div className="mx-auto max-w-[calc(var(--u)*830)]">
        <p className="font-interTight font-medium text-[calc(var(--u)*28)] md:text-[calc(var(--u)*52)] leading-[1.33] [letter-spacing:-0.028em]">
          {STATEMENT_WORDS.map((word, idx) => {
            const total = STATEMENT_WORDS.length;
            const fillPoint = statementProgress * (total + 3);
            const distance = fillPoint - idx;
            const ratio = Math.max(0, Math.min(distance / 3, 1));
            const r = Math.round(111 + ratio * (244 - 111));
            const g = Math.round(111 + ratio * (244 - 111));
            const b = Math.round(111 + ratio * (244 - 111));
            const color = `rgb(${r}, ${g}, ${b})`;

            return (
              <span
                key={`${word}-${idx}`}
                className="inline-block mr-[0.28em] transition-colors duration-150"
                style={{ color }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default EditorialManifesto;
