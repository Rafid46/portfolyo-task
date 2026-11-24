import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { BsArrowUpRight, BsX } from "react-icons/bs";
import diffImg from "../../assets/diff.png";
import project6 from "../../assets/project6.png";
import haneImg from "../../assets/hane-notes.png";
import Magnetic from "../motion/Magnetic";
import Reveal from "../motion/Reveal";
import { stopSmoothScroll, startSmoothScroll } from "../../lib/smoothScroll";

const PROJECTS = [
  {
    id: 1,
    index: "01",
    year: "2025",
    image: project6,
    name: "Acadizo — Learning Communication",
    tag: "Learning Platform",
    stickerText: "Learning · '25",
    stickerTone: "bg-[#1548EB] text-white",
    pillTone: "bg-[#9D8CF5] hover:bg-[#8975EE] text-[#1C1233]",
    tiltClass: "lg:-rotate-[2deg]",
    summary:
      "Collaborative academic workspace turning research material into visual study decks, presentations, and interactive learning flows.",
    highlights: [
      "Modular React & TypeScript architecture with Zustand global state",
      "Server-state synchronization and caching via TanStack Query",
      "Responsive Ant Design & Tailwind UI backed by Node, Express, Mongoose, and Firebase",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "TanStack Query",
      "Zustand",
      "Node.js",
      "Express",
      "Mongoose",
      "Firebase",
    ],
    link: "https://acadizo.netlify.app",
    git: "https://github.com/Rafid46/acadizo_frontend",
  },
  {
    id: 2,
    index: "02",
    year: "2025",
    image: diffImg,
    name: "Diffy — Browser Diff Editor",
    tag: "Developer Tools",
    stickerText: "DEV TOOL!",
    stickerTone: "bg-[#D94826] text-white",
    pillTone: "bg-[#F2B418] hover:bg-[#DFA20C] text-[#231712]",
    tiltClass: "lg:rotate-[1.5deg]",
    summary:
      "Browser-native local diff code editor featuring real-time file change detection, granular hunk review, and instant accept/reject controls.",
    highlights: [
      "Built with Next.js App Router and strict TypeScript interfaces",
      "Granular block-level diff inspection with instant undo support",
      "Zero-upload local workflow styled for developer ergonomics",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://diffy-eta.vercel.app/",
    git: "https://github.com/Rafid46/diff-editor",
  },
  {
    id: 3,
    index: "03",
    year: "2026",
    image: haneImg,
    name: "Hane — Spatial Notes & Whiteboard",
    tag: "Productivity App",
    stickerText: "NOTES · AI",
    stickerTone: "bg-[#0F766E] text-white",
    pillTone: "bg-[#6EE7B7] hover:bg-[#4ADEAC] text-[#0D2B24]",
    tiltClass: "lg:-rotate-[1.5deg]",
    summary:
      "Multi-view workspace combining infinite Excalidraw whiteboarding, label & folder boards, gallery view, and AI-assisted note flows.",
    highlights: [
      "Integrated interactive Excalidraw canvas alongside Gallery, List, and Folder Board views",
      "Authentication with Clerk plus state & async caching via Zustand and TanStack Query",
      "Crafted with Next.js, TypeScript, Tailwind CSS v4, HeroUI, Shadcn UI, and Framer Motion",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Excalidraw",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Clerk",
      "Framer Motion",
      "HeroUI",
    ],
    link: "https://hane-notes.vercel.app",
    git: "https://github.com/Rafid46/project--notes",
  },
];

const HeaderDoodle = ({ isWarm }) => (
  <svg
    viewBox="0 0 84 64"
    fill="none"
    aria-hidden="true"
    className={`w-14 h-11 sm:w-16 sm:h-12 shrink-0 transition-colors duration-700 ${
      isWarm ? "text-[#231712]" : "text-[#f4f4f0]"
    }`}
  >
    <rect
      x="10"
      y="14"
      width="44"
      height="32"
      rx="6"
      stroke="currentColor"
      strokeWidth="2.4"
    />
    <path
      d="M6 48h52"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M20 26l5 4-5 4M30 34h10"
      stroke="#D94826"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62 31h10a5 5 0 010 10h-10v-10z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M60 31h12v13a4 4 0 01-4 4h-4a4 4 0 01-4-4V31z"
      fill="#F2B418"
      fillOpacity="0.28"
      stroke="currentColor"
      strokeWidth="2.2"
    />
    <path
      d="M64 25c0-3 2-3 2-6M69 25c0-3 2-3 2-6"
      stroke="#D94826"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LearnersDoodle = () => (
  <svg
    viewBox="0 0 210 112"
    fill="none"
    aria-hidden="true"
    className="w-36 h-20 mx-auto text-[#231712]"
  >
    <path
      d="M52 94c-3-22 6-46 22-48 16-2 23 18 22 44"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="73"
      cy="38"
      r="16"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M66 37c2 3 5 3 7 0M76 37c2 3 5 3 7 0"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M104 94c-1-25 8-45 23-44 15 1 23 22 20 44"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="127"
      cy="39"
      r="16"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M120 38c2 3 5 3 7 0M130 38c2 3 5 3 7 0"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M148 56c10-12 24-18 28-6 4 12-9 26-22 26"
      fill="#9D8CF5"
      fillOpacity="0.28"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M100 10v8M89 14l5 5M111 14l-5 5"
      stroke="#1548EB"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M34 94h142"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const DevEditorDoodle = () => (
  <svg
    viewBox="0 0 210 112"
    fill="none"
    aria-hidden="true"
    className="w-36 h-20 mx-auto text-[#231712]"
  >
    <rect
      x="88"
      y="20"
      width="64"
      height="58"
      rx="13"
      transform="rotate(7 88 20)"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M104 42c3 3 7 3 10 0M122 44c3 3 7 3 10 0"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M111 58c5 4 12 4 16-1"
      stroke="#D94826"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M44 56h28v26a8 8 0 01-8 8H52a8 8 0 01-8-8V56z"
      fill="#F2B418"
      fillOpacity="0.32"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M44 63h-8a6 6 0 000 12h8"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <ellipse
      cx="93"
      cy="86"
      rx="11"
      ry="9"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.4"
    />
    <ellipse
      cx="120"
      cy="88"
      rx="11"
      ry="9"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.4"
    />
    <path
      d="M150 18l8-6M158 28l9-1"
      stroke="#D94826"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M30 94h150"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const NotesDoodle = () => (
  <svg
    viewBox="0 0 210 112"
    fill="none"
    aria-hidden="true"
    className="w-36 h-20 mx-auto text-[#231712]"
  >
    <rect
      x="56"
      y="22"
      width="56"
      height="66"
      rx="10"
      transform="rotate(-6 56 22)"
      fill="#6EE7B7"
      fillOpacity="0.34"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <rect
      x="88"
      y="28"
      width="60"
      height="62"
      rx="11"
      transform="rotate(5 88 28)"
      fill="#FFF8EE"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M104 49c2 3 6 3 8 0M122 50c2 3 6 3 8 0"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M109 64c5 4 11 4 16 0"
      stroke="#0F766E"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M154 24l18-10-4 20-14-10z"
      fill="#F2B418"
      fillOpacity="0.45"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M42 42c-6-6-4-14 3-17M166 72c6 4 6 12-1 16"
      stroke="#0F766E"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M32 94h146"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const SparkDoodleSticker = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    aria-hidden="true"
    className="w-12 h-12 drop-shadow-sm"
  >
    <path
      d="M28 6c4 9 14 11 14 23a14 14 0 11-28 0c0-8 5-13 9-17 1 5 3 6 5 6 0-5 0-8 0-12z"
      fill="#F2B418"
      stroke="#231712"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="30" r="2.2" fill="#231712" />
    <circle cx="33" cy="30" r="2.2" fill="#231712" />
    <path
      d="M25 36c2 2 5 2 7 0"
      stroke="#D94826"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stopSmoothScroll();

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      startSmoothScroll();
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] bg-[#1E140E]/70 backdrop-blur-[6px] p-4 sm:p-8 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97, rotate: -1 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#FFFDF9] text-[#231712] border-2 border-[#231712]/15 rounded-[28px] overflow-hidden shadow-2xl"
          >
            <div className="shrink-0 flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#231712]/10 bg-[#F9F0E8]">
              <div className="flex items-center gap-2.5">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase ${project.stickerTone}`}
                >
                  {project.stickerText}
                </span>
                <span className="text-xs font-mono uppercase text-[#6F5D52]">
                  {project.tag}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="w-9 h-9 rounded-full border border-[#231712]/15 bg-[#FFFDF9] hover:bg-[#231712] text-[#231712] hover:text-[#FFFDF9] flex items-center justify-center transition-colors cursor-pointer"
              >
                <BsX className="text-xl" aria-hidden="true" />
              </button>
            </div>

            <div
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 min-h-0 p-5 sm:p-7 space-y-5 overflow-y-auto overscroll-contain"
            >
              <div className="overflow-hidden rounded-2xl border border-[#231712]/12 bg-[#F3E7DA] p-2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/9] object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="!font-bricolage text-2xl sm:text-3xl font-bold text-[#231712]">
                  {project.name}
                </h3>
                <p className="font-interTight text-sm sm:text-base text-[#5C4B41] leading-relaxed mt-2.5">
                  {project.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-[#D94826] mb-2.5">
                  Architecture &amp; Highlights
                </h4>
                <ul className="space-y-2 text-sm text-[#3A2B22] font-interTight">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D94826] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-[#6F5D52] mb-2.5">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-[#F9F0E8] border border-[#231712]/12 text-xs font-mono text-[#231712]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#231712]/10 flex flex-wrap items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-5 py-2.5 rounded-full font-interTight font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors shadow-sm ${project.pillTone}`}
                >
                  <span>Visit Live Site</span>
                  <BsArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#231712] hover:bg-[#3A271E] text-[#FFFDF9] font-interTight font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <VscGithub className="text-base" aria-hidden="true" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const CardIllustration = ({ index }) => {
  if (index === 0) return <LearnersDoodle />;
  if (index === 1) return <DevEditorDoodle />;
  return <NotesDoodle />;
};

const Projects = ({ isWarm = true }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <Reveal className="mb-12 sm:mb-14" y={24}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[11px] uppercase mb-4 transition-colors duration-700 ${
                isWarm
                  ? "bg-[#231712] text-[#F9F0E8]"
                  : "bg-[#f4f4f0] text-[#08080a]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B418]" />
              <span>02 · Playful Builds</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <h2
                className={`!font-bricolage text-4xl sm:text-5xl lg:text-6xl font-bold leading-none transition-colors duration-700 ${
                  isWarm ? "text-[#231712]" : "text-[#f4f4f0]"
                }`}
              >
                <span className="relative inline-block text-[#D94826]">
                  Projects
                  <svg
                    viewBox="0 0 180 14"
                    fill="none"
                    aria-hidden="true"
                    className="w-full h-3 -mt-1"
                  >
                    <path
                      d="M3 9c42-7 104-7 174 0"
                      stroke="#F2B418"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <HeaderDoodle isWarm={isWarm} />
            </div>
          </div>

          <p
            className={`font-interTight text-sm max-w-xs leading-relaxed transition-colors duration-700 ${
              isWarm ? "text-[#6F5D52]" : "text-zinc-400"
            }`}
          >
            Hand-crafted web apps &amp; developer tools. Tap any card to peek
            inside or launch it live.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-6 items-stretch pt-2 pb-4">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.id} y={28} delay={idx * 0.08}>
            <article
              className={`group relative h-full flex flex-col justify-between rounded-[26px] bg-[#FFFDF9] text-[#231712] border border-[#231712]/12 p-4 sm:p-5 shadow-[0_18px_42px_-20px_rgba(35,23,18,0.22)] transition-transform duration-300 ease-out hover:rotate-0 hover:-translate-y-1.5 ${project.tiltClass}`}
            >
              <span
                aria-hidden="true"
                className={`absolute -top-3 ${
                  idx % 2 === 0
                    ? "-left-2 -rotate-[8deg]"
                    : "-right-2 rotate-[8deg]"
                } z-20 px-2.5 py-0.5 rounded-lg border-2 border-[#FFFDF9] font-mono text-[10px] font-bold uppercase shadow-md ${project.stickerTone}`}
              >
                {project.stickerText}
              </span>

              {idx === 2 && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -bottom-5 -right-3 z-20 pointer-events-none rotate-[8deg]"
                >
                  <SparkDoodleSticker />
                </div>
              )}

              <div>
                <div className="pt-1 pb-2.5">
                  <CardIllustration index={idx} />
                </div>

                <div className="text-center mb-3.5">
                  <span className="font-mono text-[10px] uppercase text-[#6F5D52]">
                    {project.tag} · [{project.year}]
                  </span>
                  <h3 className="!font-bricolage text-lg sm:text-xl font-bold text-[#231712] mt-1 leading-snug">
                    {project.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.name} details`}
                  className="relative w-full block cursor-pointer text-left rounded-2xl bg-[#F3E7DA] p-1.5 border border-[#231712]/10 group/shot"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#E6D0B5]/90 -rotate-2 rounded-[2px] z-10 shadow-sm"
                  />
                  <div className="overflow-hidden rounded-xl aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={`${project.name} interface preview`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/shot:scale-105"
                    />
                  </div>
                </button>

                <p className="font-interTight text-xs text-[#5C4B41] text-center leading-relaxed mt-3.5 px-1 line-clamp-2">
                  {project.summary}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[#231712]/10 flex flex-col gap-3.5">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {project.tech.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-full bg-[#F9F0E8] border border-[#231712]/12 text-[10px] font-mono text-[#3A2B22]"
                    >
                      {item}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#F9F0E8] border border-[#231712]/12 text-[10px] font-mono text-[#6F5D52]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2">
                  <Magnetic strength={0.3}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={`px-4 h-9 rounded-full font-interTight font-semibold text-xs transition-colors cursor-pointer shadow-sm ${project.pillTone}`}
                    >
                      Peek Details
                    </button>
                  </Magnetic>

                  <Magnetic strength={0.3}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live site for ${project.name}`}
                      className="px-3.5 h-9 inline-flex items-center gap-1 rounded-full bg-[#231712] hover:bg-[#3B2820] text-[#FFFDF9] font-interTight font-medium text-xs transition-colors"
                    >
                      <span>Live</span>
                      <BsArrowUpRight className="text-xs" aria-hidden="true" />
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.3}>
                    <a
                      target="_blank"
                      href={project.git}
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${project.name}`}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F9F0E8] border border-[#231712]/15 text-[#231712] hover:bg-[#231712] hover:text-[#FFFDF9] transition-colors"
                    >
                      <VscGithub className="text-base" aria-hidden="true" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[#231712]/12 bg-[#FFFDF9] px-5 sm:px-7 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#1548EB] text-white font-mono text-[10px] font-bold uppercase -rotate-2">
            More Builds
          </span>
          <p className="font-interTight text-xs sm:text-sm text-[#4A3B33]">
            More UI experiments, tools, and full-stack repos live on GitHub.
          </p>
        </div>
        <Magnetic strength={0.3}>
          <a
            href="https://github.com/Rafid46"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#231712] hover:bg-[#D94826] text-[#FFFDF9] font-interTight font-medium text-xs transition-colors shrink-0"
          >
            <VscGithub className="text-sm" aria-hidden="true" />
            <span>Explore GitHub</span>
            <BsArrowUpRight aria-hidden="true" />
          </a>
        </Magnetic>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
