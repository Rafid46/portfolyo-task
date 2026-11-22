import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { BsArrowUpRight, BsX } from "react-icons/bs";
import diffImg from "../../assets/diff.png";
import haneImg from "../../assets/hane-notes.png";
import project6 from "../../assets/project6.png";
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
    summary:
      "Collaborative academic communication workspace transforming research material into visual study flows, presentations, and interactive learning sessions.",
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
    summary:
      "Browser-native local diff code editor featuring real-time file system change detection, granular hunk review, and instant accept/reject controls.",
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
    name: "Hane — Spatial Notes & Folder Board",
    tag: "Productivity / AI",
    summary:
      "Spatial infinite-canvas notes workspace with pan/zoom whiteboard, gallery & grid views, AI note conversion, and local folder board.",
    highlights: [
      "Infinite pan/zoom whiteboard, masonry gallery, and multi-column list views synced via TanStack Query",
      "AI Notes assistant converting prompts and PDF/DOCX/image/audio uploads into structured notes",
      "Local Folder Whiteboard for arranging and previewing device files with Next.js, Clerk, Express, and Prisma",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Framer Motion",
      "Clerk",
      "Express",
      "Prisma",
    ],
    link: "",
    git: "https://github.com/Rafid46/project--notes",
  },
];

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
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#111114] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="shrink-0 flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-teal-400">
                  [{project.index}]
                </span>
                <span className="text-xs font-mono uppercase text-zinc-400">
                  {project.tag} · {project.year}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="w-9 h-9 rounded-full border border-white/15 bg-[#18181c] hover:border-teal-400/60 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <BsX className="text-xl" aria-hidden="true" />
              </button>
            </div>

            <div
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 min-h-0 p-5 sm:p-7 space-y-6 overflow-y-auto overscroll-contain"
            >
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#08080a]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              <div>
                <h3 className="!font-bricolage text-2xl sm:text-3xl font-bold text-[#f4f4f0]">
                  {project.name}
                </h3>
                <p className="font-interTight text-sm sm:text-base text-zinc-300 leading-relaxed mt-3">
                  {project.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-teal-400 mb-3">
                  Architecture &amp; Highlights
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300 font-interTight">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-[#18181c] border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-teal-400 hover:bg-[#f4f4f0] text-[#08080a] font-archivo font-semibold text-xs sm:text-sm uppercase inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <BsArrowUpRight aria-hidden="true" />
                  </a>
                )}
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#18181c] hover:bg-zinc-800 border border-white/15 text-[#f4f4f0] font-interTight font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.id} y={28} delay={idx * 0.08}>
            <article className="group relative h-full flex flex-col justify-between rounded-xl border border-white/10 hover:border-teal-400/40 bg-[#111114] p-4 sm:p-5 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-3 pb-3 mb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] text-teal-400">
                      {project.index}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-400/10 border border-teal-400/25 text-[11px] font-mono text-teal-300">
                      {project.tag}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500">
                    [{project.year}]
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.name} details`}
                  className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-[#08080a] block cursor-pointer text-left"
                >
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-white/10 bg-[#151519]">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400/70" />
                    <span className="ml-1.5 text-[10px] font-mono text-zinc-500 truncate">
                      {(project.link || project.git).replace(
                        /^https?:\/\//,
                        "",
                      )}
                    </span>
                  </div>
                  <div className="overflow-hidden aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={`${project.name} interface preview`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </button>

                <div className="mt-4">
                  <h3 className="!font-bricolage text-lg sm:text-xl font-bold text-[#f4f4f0] group-hover:text-teal-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-interTight text-xs sm:text-sm text-zinc-400 leading-relaxed mt-1.5 line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col gap-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-[#18181c] border border-white/10 text-[10px] font-mono text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-[#18181c] border border-white/10 text-[10px] font-mono text-zinc-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-[11px] font-mono uppercase text-teal-400 hover:text-[#f4f4f0] transition-colors cursor-pointer"
                  >
                    [ Details ]
                  </button>

                  <div className="flex items-center gap-2">
                    <Magnetic strength={0.35}>
                      <a
                        target="_blank"
                        href={project.git}
                        rel="noreferrer"
                        aria-label={`GitHub repository for ${project.name}`}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#18181c] border border-white/15 text-zinc-200 hover:text-teal-400 hover:border-teal-400/50 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
                      >
                        <VscGithub className="text-base" aria-hidden="true" />
                      </a>
                    </Magnetic>

                    {project.link && (
                      <Magnetic strength={0.35}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View live site for ${project.name}`}
                          className="px-3.5 h-8 flex items-center justify-center gap-1.5 rounded-full bg-teal-400 text-[#08080a] hover:bg-[#f4f4f0] font-archivo font-semibold text-[11px] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
                        >
                          <span>Live</span>
                          <BsArrowUpRight
                            className="text-xs"
                            aria-hidden="true"
                          />
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111114] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase text-zinc-500 block">
            Open Source Archive
          </span>
          <p className="font-interTight text-sm sm:text-base text-zinc-300 mt-1">
            More experiments, UI components, and full-stack builds on GitHub.
          </p>
        </div>
        <Magnetic strength={0.3}>
          <a
            href="https://github.com/Rafid46"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18181c] hover:bg-teal-400 text-[#f4f4f0] hover:text-[#08080a] border border-white/15 hover:border-teal-400 font-mono text-xs uppercase transition-colors"
          >
            <VscGithub className="text-base" aria-hidden="true" />
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
