import Reveal from "./motion/Reveal";

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Sugary",
    period: "Sep 2025 – Present",
    current: true,
    bullets: [
      "Implemented features for an ongoing web application using Next.js, translating requirements into functional, responsive UI.",
      "Collaborated with the team to build and ship project features on schedule.",
    ],
    stack: ["Next.js", "Zustand", "Shadcn UI"],
  },
  {
    role: "Frontend Developer",
    company: "BanglaCodeX (Remote, Full-time)",
    subtitle:
      "Sister concern of Pflegetech GmbH, Germany. Contributed to an ERP system, enhancing user experience and administrative functionality.",
    period: "Apr 2024 – Oct 2024",
    current: false,
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
  },
];

const EDUCATION_LIST = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Dhaka City College",
    period: "2019 – 2023",
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Dhaka City College",
    period: "2016 – 2018",
    highlight: false,
  },
  {
    degree: "Secondary School Certificate",
    institution: "Motijheel Govt. Boys High School",
    period: "2016 – 2018",
    highlight: false,
  },
];

const Educations = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
      <section aria-label="Work Experience" className="flex-1">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <h3 className="text-2xl sm:text-3xl font-semibold font-archivo text-[#f4f4f0]">
            Experience<span className="text-teal-400">.</span>
          </h3>
          <span className="text-xs font-mono uppercase text-zinc-500">
            02 Roles
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.company} y={24} delay={idx * 0.08}>
              <article className="relative pl-6 border-l border-white/15">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-[#08080a] ${
                    exp.current ? "bg-teal-400" : "bg-zinc-600"
                  }`}
                />
                <div className="p-5 sm:p-6 rounded-2xl bg-[#111114] border border-white/10 hover:border-teal-400/35 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-[#f4f4f0] font-archivo">
                      {exp.role}
                    </h4>
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        exp.current
                          ? "text-teal-300 bg-teal-400/10 border-teal-400/25"
                          : "text-zinc-400 bg-[#18181c] border-white/10"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-200 font-medium mb-3">
                    {exp.company}
                  </p>

                  {exp.subtitle && (
                    <p className="text-xs sm:text-sm text-zinc-400 mb-3 font-interTight leading-relaxed">
                      {exp.subtitle}
                    </p>
                  )}

                  <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm font-interTight mb-4">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-[#18181c] border border-white/10 text-[11px] font-mono text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="education"
        aria-label="Education History"
        className="flex-1"
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <h3 className="text-2xl sm:text-3xl font-semibold font-archivo text-[#f4f4f0]">
            Education<span className="text-teal-400">.</span>
          </h3>
          <span className="text-xs font-mono uppercase text-zinc-500">
            Academic
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <Reveal key={edu.degree} y={24} delay={idx * 0.08}>
              <article className="relative pl-6 border-l border-white/15">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-[#08080a] ${
                    edu.highlight ? "bg-teal-400" : "bg-zinc-600"
                  }`}
                />
                <div className="p-5 sm:p-6 rounded-2xl bg-[#111114] border border-white/10 hover:border-teal-400/35 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-lg sm:text-xl font-semibold text-[#f4f4f0] font-archivo">
                      {edu.degree}
                    </h4>
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        edu.highlight
                          ? "text-teal-300 bg-teal-400/10 border-teal-400/25"
                          : "text-zinc-400 bg-[#18181c] border-white/10"
                      }`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 font-interTight">
                    {edu.institution}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Educations;
