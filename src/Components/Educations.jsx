import { useState } from "react";
import Reveal from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

const EXPERIENCES = [
  {
    id: "sugary",
    role: "Frontend Developer",
    company: "Sugary",
    period: "Sep 2025 – Present",
    current: true,
    sticker: "NOW · SHIPPING",
    stickerClass: "bg-[#6EE7B7] text-[#17120E]",
    tiltClass: "-rotate-[1deg] hover:rotate-0",
    borderHover: "hover:border-[#6EE7B7]",
    shadowClass:
      "shadow-[5px_5px_0px_rgba(110,231,183,0.45)] hover:shadow-[8px_8px_0px_#6EE7B7]",
    accentDot: "bg-[#6EE7B7]",
    bullets: [
      "Implemented features for an ongoing web application using Next.js, translating requirements into functional, responsive UI.",
      "Collaborated with the team to build and ship project features on schedule.",
    ],
    stack: ["Next.js", "Zustand", "Shadcn UI"],
    doodle: "laptop",
  },
  {
    id: "banglacodex",
    role: "Frontend Developer",
    company: "BanglaCodeX (Remote, Full-time)",
    subtitle:
      "Sister concern of Pflegetech GmbH, Germany. Contributed to an ERP system, enhancing user experience and administrative functionality.",
    period: "Apr 2024 – Oct 2024",
    current: false,
    sticker: "REMOTE · DE",
    stickerClass: "bg-[#9D8CF5] text-[#17120E]",
    tiltClass: "rotate-[1.1deg] hover:rotate-0",
    borderHover: "hover:border-[#9D8CF5]",
    shadowClass:
      "shadow-[5px_5px_0px_rgba(157,140,245,0.4)] hover:shadow-[8px_8px_0px_#9D8CF5]",
    accentDot: "bg-[#9D8CF5]",
    bullets: [
      "Led development of user profile features and converted Figma designs into responsive UI components using React.js and Tailwind CSS.",
      "Built chat, calendar, and notification interfaces, integrating APIs to support real-time updates and interaction.",
      "Collaborated with cross-functional team members to ensure smooth coordination and on-time feature delivery.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "React Query",
      "Context API",
      "Ant Design",
      "Tailwind CSS",
    ],
    doodle: "erp",
  },
];

const EDUCATION_LIST = [
  {
    id: "bsc",
    degree: "BSc in Computer Science & Engineering",
    institution: "Dhaka City College",
    period: "2019 – 2023",
    sticker: "DEGREE · '23",
    highlight: true,
    tiltClass: "-rotate-[1.4deg] hover:rotate-0",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate",
    institution: "Dhaka City College",
    period: "2016 – 2018",
    badge: "02",
    accentHex: "#F2B418",
    shadowClass:
      "shadow-[4px_4px_0px_rgba(242,180,24,0.45)] hover:shadow-[6px_6px_0px_#F2B418] hover:border-[#F2B418]",
    tiltClass: "rotate-[1.2deg] hover:rotate-0",
    highlight: false,
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate",
    institution: "Motijheel Govt. Boys High School",
    period: "2016 – 2018",
    badge: "03",
    accentHex: "#D94826",
    shadowClass:
      "shadow-[4px_4px_0px_rgba(217,72,38,0.45)] hover:shadow-[6px_6px_0px_#D94826] hover:border-[#D94826]",
    tiltClass: "-rotate-[1deg] hover:rotate-0",
    highlight: false,
  },
];

const FILTER_TABS = [
  { id: "all", label: "All · 05" },
  { id: "work", label: "Work · 02" },
  { id: "study", label: "Education · 03" },
];

const LaptopCoffeeDoodle = () => (
  <svg
    viewBox="0 0 88 54"
    fill="none"
    aria-hidden="true"
    className="w-16 h-10 shrink-0"
  >
    <rect
      x="6"
      y="8"
      width="42"
      height="28"
      rx="5"
      fill="#1b1a22"
      stroke="#F9F0E8"
      strokeWidth="2.2"
    />
    <path
      d="M2 39H52L47 46H7L2 39Z"
      fill="#6EE7B7"
      stroke="#F9F0E8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M20 20L15 23L20 26M34 20L39 23L34 26M29 18L25 28"
      stroke="#6EE7B7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="60"
      y="24"
      width="16"
      height="18"
      rx="4"
      fill="#F2B418"
      stroke="#F9F0E8"
      strokeWidth="2"
    />
    <path
      d="M76 28H80C82.2 28 83.5 29.5 83.5 31.5C83.5 33.5 82.2 35 80 35H76"
      stroke="#F9F0E8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M65 18C65 15 68 15 68 12M71 19C71 16 74 16 74 13"
      stroke="#F2B418"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ErpNodesDoodle = () => (
  <svg
    viewBox="0 0 88 54"
    fill="none"
    aria-hidden="true"
    className="w-16 h-10 shrink-0"
  >
    <rect
      x="6"
      y="10"
      width="34"
      height="24"
      rx="6"
      fill="#9D8CF5"
      stroke="#F9F0E8"
      strokeWidth="2.2"
    />
    <path
      d="M14 20H32M14 26H25"
      stroke="#17120E"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M40 22H52"
      stroke="#F9F0E8"
      strokeWidth="2.2"
      strokeDasharray="3 3"
      strokeLinecap="round"
    />
    <rect
      x="52"
      y="14"
      width="28"
      height="26"
      rx="5"
      fill="#1b1a22"
      stroke="#F9F0E8"
      strokeWidth="2.2"
    />
    <path
      d="M52 22H80"
      stroke="#F9F0E8"
      strokeWidth="2"
    />
    <circle cx="66" cy="31" r="4" fill="#F2B418" />
    <circle cx="77" cy="11" r="4" fill="#D94826" stroke="#F9F0E8" strokeWidth="1.8" />
  </svg>
);

const GradCapDoodle = () => (
  <svg
    viewBox="0 0 76 54"
    fill="none"
    aria-hidden="true"
    className="w-14 h-10 shrink-0"
  >
    <path
      d="M38 7L70 20L38 33L6 20L38 7Z"
      fill="#9D8CF5"
      stroke="#17120E"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M18 26V39C18 42.5 27 46 38 46C49 46 58 42.5 58 39V26"
      fill="#F2B418"
      stroke="#17120E"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M66 22V37"
      stroke="#17120E"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="66" cy="40" r="3.5" fill="#D94826" stroke="#17120E" strokeWidth="2" />
    <path
      d="M11 8L13 13L18 15L13 17L11 22L9 17L4 15L9 13L11 8Z"
      fill="#D94826"
    />
  </svg>
);

const Educations = () => {
  const [filter, setFilter] = useState("all");
  const [selectedTech, setSelectedTech] = useState(null);

  const showWork = filter === "all" || filter === "work";
  const showStudy = filter === "all" || filter === "study";

  const handleTechClick = (tech) => {
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div
          role="tablist"
          aria-label="Filter background sections"
          className="inline-flex flex-wrap items-center gap-2.5"
        >
          {FILTER_TABS.map((tab) => {
            const active = filter === tab.id;
            return (
              <Magnetic key={tab.id} strength={0.18} radius={70}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase border-2 transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#F2B418] text-[#17120E] border-[#17120E] shadow-[4px_4px_0px_#9D8CF5] -translate-y-0.5"
                      : "bg-[#141318] text-[#F9F0E8]/75 border-white/15 hover:border-[#F9F0E8]/50 hover:text-[#F9F0E8]"
                  }`}
                >
                  {tab.label}
                </button>
              </Magnetic>
            );
          })}
        </div>

        {selectedTech && (
          <button
            type="button"
            onClick={() => setSelectedTech(null)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9D8CF5] text-[#17120E] text-xs font-mono font-bold border-2 border-[#17120E] shadow-[3px_3px_0px_#F2B418] cursor-pointer"
          >
            <span>Pinned: {selectedTech}</span>
            <span aria-hidden="true">×</span>
          </button>
        )}
      </div>

      <div
        className={`grid grid-cols-1 gap-10 lg:gap-12 ${
          filter === "all" ? "lg:grid-cols-12" : ""
        }`}
      >
        {showWork && (
          <section
            aria-label="Work Experience"
            className={filter === "all" ? "lg:col-span-7" : ""}
          >
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-[#6EE7B7] border border-[#17120E]" />
                <h3 className="text-2xl sm:text-3xl !font-bricolage font-bold text-[#F9F0E8]">
                  Work Experience
                </h3>
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#18171e] border border-white/15 text-[#F9F0E8]/60">
                02 Chapters
              </span>
            </div>

            <div
              className={`grid gap-7 ${
                filter === "work" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {EXPERIENCES.map((exp, idx) => (
                <Reveal key={exp.id} y={28} delay={idx * 0.08}>
                  <article
                    className={`group relative rounded-[24px] bg-[#131218] border-2 border-white/15 p-6 sm:p-7 transition-all duration-300 ${exp.tiltClass} ${exp.borderHover} ${exp.shadowClass} hover:-translate-y-1`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-lg border-2 border-[#17120E] text-[10px] font-mono font-bold uppercase shadow-[3px_3px_0px_#08080a] -rotate-2 group-hover:rotate-0 transition-transform mb-4 ${exp.stickerClass}`}
                    >
                      {exp.sticker}
                    </span>

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-xl sm:text-2xl !font-bricolage font-bold text-[#F9F0E8] leading-snug">
                          {exp.role}
                        </h4>
                        <p className="text-sm sm:text-base font-interTight font-medium text-[#F2B418] mt-1">
                          {exp.company}
                        </p>
                      </div>
                      {exp.doodle === "laptop" ? (
                        <LaptopCoffeeDoodle />
                      ) : (
                        <ErpNodesDoodle />
                      )}
                    </div>

                    <div className="mb-4">
                      <time className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-[#1c1b22] border border-white/15 text-[#F9F0E8]/80">
                        <span
                          aria-hidden="true"
                          className={`w-2 h-2 rounded-full ${exp.accentDot}`}
                        />
                        {exp.period}
                      </time>
                    </div>

                    {exp.subtitle && (
                      <p className="text-xs sm:text-sm text-[#F9F0E8]/70 mb-4 font-interTight leading-relaxed border-l-2 border-[#9D8CF5]/50 pl-3">
                        {exp.subtitle}
                      </p>
                    )}

                    <ul className="space-y-2.5 text-[#F9F0E8]/85 text-xs sm:text-sm font-interTight mb-5">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${exp.accentDot}`}
                          />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {exp.stack.map((tech) => {
                        const isPinned = selectedTech === tech;
                        return (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => handleTechClick(tech)}
                            className={`px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all cursor-pointer ${
                              isPinned
                                ? "bg-[#F2B418] text-[#17120E] border-[#17120E] font-bold scale-105 shadow-[2px_2px_0px_#9D8CF5]"
                                : "bg-[#1a1920] text-[#F9F0E8]/75 border-white/15 hover:border-[#F2B418]/70 hover:text-[#F9F0E8]"
                            }`}
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {showStudy && (
          <section
            id="education"
            aria-label="Education History"
            className={filter === "all" ? "lg:col-span-5" : ""}
          >
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-[#F2B418] border border-[#17120E]" />
                <h3 className="text-2xl sm:text-3xl !font-bricolage font-bold text-[#F9F0E8]">
                  Education
                </h3>
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#18171e] border border-white/15 text-[#F9F0E8]/60">
                CS Roots
              </span>
            </div>

            <div
              className={`grid gap-5 ${
                filter === "study"
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {EDUCATION_LIST.map((edu, idx) =>
                edu.highlight ? (
                  <Reveal key={edu.id} y={28} delay={idx * 0.08}>
                    <article
                      className={`group relative rounded-[24px] bg-[#FFFDF9] text-[#17120E] border-2 border-[#17120E] p-6 transition-all duration-300 shadow-[6px_6px_0px_#F2B418] hover:shadow-[9px_9px_0px_#F2B418] hover:-translate-y-1 ${edu.tiltClass}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className="inline-block px-3 py-1 rounded-lg bg-[#9D8CF5] text-[#17120E] border-2 border-[#17120E] text-[10px] font-mono font-bold uppercase shadow-[3px_3px_0px_#17120E] rotate-2 group-hover:rotate-0 transition-transform">
                          {edu.sticker}
                        </span>
                        <GradCapDoodle />
                      </div>

                      <h4 className="text-xl !font-bricolage font-bold text-[#17120E] leading-snug mb-2">
                        {edu.degree}
                      </h4>

                      <p className="text-sm sm:text-base font-interTight font-semibold text-[#D94826] mb-4">
                        {edu.institution}
                      </p>

                      <div className="pt-3 border-t border-[#17120E]/15 flex items-center justify-between">
                        <time className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F9F0E8] border border-[#17120E]/20 text-[#17120E]">
                          {edu.period}
                        </time>
                        <span className="text-xs font-mono text-[#17120E]/60">
                          Graduation
                        </span>
                      </div>
                    </article>
                  </Reveal>
                ) : (
                  <Reveal key={edu.id} y={24} delay={idx * 0.08}>
                    <article
                      className={`group relative rounded-[20px] bg-[#14131a] border-2 border-white/15 p-5 transition-all duration-300 hover:-translate-y-0.5 ${edu.tiltClass} ${edu.shadowClass}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span
                            style={{ backgroundColor: edu.accentHex }}
                            className="w-8 h-8 rounded-lg border-2 border-[#17120E] text-[#17120E] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[2px_2px_0px_#08080a] -rotate-3 group-hover:rotate-0 transition-transform"
                          >
                            {edu.badge}
                          </span>
                          <div>
                            <h4 className="text-base sm:text-lg !font-bricolage font-bold text-[#F9F0E8] leading-snug">
                              {edu.degree}
                            </h4>
                            <p className="text-xs sm:text-sm font-interTight text-[#F9F0E8]/70 mt-1">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <time className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1e1d26] border border-white/15 text-[#F9F0E8]/75 shrink-0">
                          {edu.period}
                        </time>
                      </div>
                    </article>
                  </Reveal>
                )
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Educations;
