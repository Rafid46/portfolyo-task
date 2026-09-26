/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../../lib/smoothScroll";

/* ---------------------------------------------------------------- visuals */

const Panel = ({ children, label }) => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-black/60 overflow-hidden"
  >
    <div className="flex items-center gap-2 mb-5">
      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
      <span className="w-2.5 h-2.5 rounded-full bg-teal-400/70" />
      <span className="ml-2 text-[11px] font-mono text-zinc-500 tracking-wide">
        {label}
      </span>
    </div>
    {children}
  </div>
);

const UnderstandVisual = () => (
  <Panel label="brief.md">
    <div className="space-y-3 font-neue">
      {[
        ["Who is this actually for?", true],
        ["What breaks at 10x the data?", true],
        ["Which states are undefined?", true],
        ["What is the slowest network we support?", false],
      ].map(([line, done]) => (
        <div key={line} className="flex items-start gap-3">
          <span
            className={`mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center text-[9px] ${
              done
                ? "bg-teal-400 border-teal-400 text-black"
                : "border-zinc-600 text-transparent"
            }`}
          >
            OK
          </span>
          <span
            className={`text-sm ${done ? "text-zinc-300" : "text-zinc-500"}`}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  </Panel>
);

const ArchitectVisual = () => (
  <Panel label="component-tree">
    <div className="font-mono text-[11px] sm:text-xs leading-6 text-zinc-400">
      <div className="text-teal-400">&lt;App /&gt;</div>
      <div className="pl-4 border-l border-zinc-800 ml-1">
        <div>├─ &lt;Layout /&gt;</div>
        <div className="pl-4">
          <div>│ ├─ &lt;Nav /&gt;</div>
          <div className="text-violet-400">│ └─ &lt;Outlet /&gt;</div>
        </div>
        <div>├─ hooks/</div>
        <div className="pl-4 text-zinc-500">
          <div>│ ├─ useSmoothScroll()</div>
          <div>│ └─ useReveal()</div>
        </div>
        <div>
          └─ store/ <span className="text-zinc-600">zustand</span>
        </div>
      </div>
    </div>
  </Panel>
);

const BuildVisual = () => (
  <Panel label="Section.tsx">
    <pre className="font-mono text-[11px] sm:text-xs leading-6 text-zinc-400 overflow-hidden whitespace-pre-wrap">
      <span className="text-violet-400">export function</span>{" "}
      <span className="text-teal-300">Section</span>({"{ items }"}) {"{"}
      {"\n  "}
      <span className="text-violet-400">return</span> (
      {"\n    "}&lt;<span className="text-teal-300">ul</span>{" "}
      <span className="text-zinc-500">className</span>=
      <span className="text-emerald-400">&quot;grid gap-4&quot;</span>&gt;
      {"\n      "}
      {"{"}items.map((i) =&gt; (
      {"\n        "}&lt;<span className="text-teal-300">Card</span>{" "}
      <span className="text-zinc-500">key</span>={"{"}i.id{"}"} {"{"}...i{"}"}{" "}
      /&gt;
      {"\n      "})){"}"}
      {"\n    "}&lt;/<span className="text-teal-300">ul</span>&gt;
      {"\n  "});
      {"\n"}
      {"}"}
    </pre>
  </Panel>
);

const RefineVisual = () => (
  <Panel label="lighthouse">
    <div className="grid grid-cols-2 gap-4 font-neue">
      {[
        ["Performance", 98],
        ["Accessibility", 100],
        ["Best Practices", 100],
        ["SEO", 100],
      ].map(([label, score]) => (
        <div
          key={label}
          className="rounded-2xl bg-zinc-800/40 border border-zinc-700/50 p-4"
        >
          <p className="text-2xl font-bold text-teal-400 font-founderGrotest">
            {score}
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5">{label}</p>
          <div className="mt-2 h-1 rounded-full bg-zinc-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-teal-400"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </Panel>
);

/* ------------------------------------------------------------------ steps */

const steps = [
  {
    id: "understand",
    title: "Understand",
    lede: "Audit before a single line of code.",
    body: "I start by finding the edges — the empty states, the slow network, the row count nobody planned for. Most frontend bugs are decisions that were never made.",
    tags: ["Requirements", "Edge cases", "Constraints"],
    Visual: UnderstandVisual,
  },
  {
    id: "architect",
    title: "Architect",
    lede: "Structure that survives the second feature.",
    body: "Component boundaries, state ownership and data flow get decided up front. Typed contracts and reusable hooks keep the codebase from calcifying three sprints in.",
    tags: ["Component design", "State model", "TypeScript"],
    Visual: ArchitectVisual,
  },
  {
    id: "build",
    title: "Build",
    lede: "Ship interfaces, not screenshots.",
    body: "Figma becomes responsive, accessible markup — every breakpoint, every state, keyboard included. Pixel-accurate where it matters, fluid everywhere else.",
    tags: ["React & Next.js", "Tailwind", "Responsive"],
    Visual: BuildVisual,
  },
  {
    id: "refine",
    title: "Refine",
    lede: "Motion, a11y, and the last ten percent.",
    body: "Animation with intent, contrast that passes, and a bundle that loads on a mid-range phone. The polish pass is where a good build turns into a good product.",
    tags: ["GSAP motion", "WCAG AA", "Core Web Vitals"],
    Visual: RefineVisual,
  },
];

/* -------------------------------------------------------------- component */

const ProcessScroll = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const railFillRef = useRef(null);
  const [reduced] = useState(() => prefersReducedMotion());

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return undefined;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".process-panel");
      const dots = gsap.utils.toArray(".process-dot");
      const total = panels.length;
      if (!total) return;

      // Panel 0 starts visible; the rest wait their turn.
      gsap.set(panels, { autoAlpha: 0, y: 48 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      gsap.set(dots, { backgroundColor: "#3f3f46", scale: 0.6, opacity: 0.5 });
      gsap.set(dots[0], { backgroundColor: "#2dd4bf", scale: 1, opacity: 1 });

      // Outgoing panel clears before the incoming one arrives, so the two
      // never sit on top of each other at readable opacity.
      const span = total - 1 + 0.5; // trailing dwell on the final step

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${total * 90}%`,
          pin: stage,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel, i) => {
        if (i > 0) {
          tl.fromTo(
            panel,
            { autoAlpha: 0, y: 48 },
            { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
            i - 0.3,
          );
          tl.to(
            dots[i],
            {
              backgroundColor: "#2dd4bf",
              scale: 1,
              opacity: 1,
              duration: 0.25,
            },
            i - 0.3,
          );
        }
        if (i < total - 1) {
          tl.to(
            panel,
            { autoAlpha: 0, y: -48, duration: 0.3, ease: "power2.in" },
            i + 0.5,
          );
          tl.to(
            dots[i],
            {
              backgroundColor: "#3f3f46",
              scale: 0.6,
              opacity: 0.5,
              duration: 0.25,
            },
            i + 0.5,
          );
        }
      });

      // Progress rail runs the full length of the pinned scroll.
      if (railFillRef.current) {
        tl.fromTo(
          railFillRef.current,
          { scaleY: 0 },
          { scaleY: 1, ease: "none", duration: span },
          0,
        );
      }

      // The rail tween above runs to `span`, which also holds the final panel
      // on screen for the trailing dwell before the section unpins.
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="How I work"
      className="relative w-full"
    >
      <div
        ref={stageRef}
        className={
          reduced
            ? "w-full py-16"
            : "w-full min-h-screen flex items-center overflow-hidden py-16"
        }
      >
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 font-neue mb-3">
                The Process
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-brolimo font-semibold text-white">
                How a build actually goes
                <span className="text-teal-400">.</span>
              </h2>
            </div>
            <span className="hidden sm:block text-xs font-neue text-zinc-500 shrink-0 pb-2">
              Scroll to advance
            </span>
          </div>

          <div className="flex gap-6 sm:gap-10">
            {/* progress rail */}
            <div
              aria-hidden="true"
              className="hidden sm:flex flex-col items-center shrink-0 pt-2"
            >
              <div className="relative w-px flex-1 bg-zinc-800 min-h-[220px]">
                <div
                  ref={railFillRef}
                  className="absolute inset-0 w-px bg-teal-400 origin-top"
                  style={{ transform: reduced ? "scaleY(1)" : "scaleY(0)" }}
                />
              </div>
              <div className="flex flex-col gap-3 py-4">
                {steps.map((step) => (
                  <span
                    key={step.id}
                    className="process-dot w-2.5 h-2.5 rounded-full bg-zinc-700"
                  />
                ))}
              </div>
            </div>

            {/* Stacked panels: CSS grid stacking sizes the box to the tallest
                panel, so no absolute positioning or hard-coded height. */}
            <div className={reduced ? "flex-1 space-y-16" : "flex-1 grid"}>
              {steps.map((step, i) => {
                const { Visual } = step;
                return (
                  <div
                    key={step.id}
                    className={`process-panel grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                      reduced ? "" : "[grid-area:1/1]"
                    }`}
                  >
                    <div>
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-5xl sm:text-6xl font-founderGrotest font-bold text-zinc-800 leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-founderGrotest font-bold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-lg sm:text-xl text-teal-400 font-neue mb-3">
                        {step.lede}
                      </p>
                      <p className="text-sm sm:text-base text-zinc-400 font-neue leading-relaxed max-w-md">
                        {step.body}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-neue text-zinc-300 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-zinc-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <Visual />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessScroll;
