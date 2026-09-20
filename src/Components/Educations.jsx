import { FaCircle } from "react-icons/fa";

const Educations = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-12 sm:mt-20">
      <section id="experience" aria-label="Work Experience" className="flex-1">
        <div className="flex items-center justify-start mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-founderGrotest text-white">
            Experience<span className="text-teal-400">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <article className="relative pl-6 border-l-2 border-teal-500/50">
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-black" />
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white font-neue">
                  Frontend Developer
                </h3>
                <span className="text-xs sm:text-sm text-teal-400 font-medium px-2.5 py-0.5 rounded-full bg-teal-950/60 border border-teal-500/20">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-base text-gray-200 font-medium mb-3">Sugary</p>
              <ul className="list-disc ml-4 text-gray-300 text-xs sm:text-sm space-y-1.5 font-neue">
                <li>
                  Implemented features for an ongoing web application using Next.js, translating requirements into functional, responsive UI.
                </li>
                <li>
                  Collaborate with the team to build and ship project features on schedule.
                </li>
                <li className="text-teal-300 font-medium">
                  Tech stack: Next.js, Zustand, Shadcn.
                </li>
              </ul>
            </div>
          </article>

          <article className="relative pl-6 border-l-2 border-teal-500/50">
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-black" />
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white font-neue">
                  Frontend Developer
                </h3>
                <span className="text-xs sm:text-sm text-gray-400 px-2.5 py-0.5 rounded-full bg-zinc-800/60 border border-zinc-700/40">
                  Apr 2024 – Oct 2024
                </span>
              </div>
              <p className="text-base text-gray-200 font-medium mb-2">
                BanglaCodeX (Remote, Full-time)
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 font-neue">
                Sister concern of Pflegetech GmbH, Germany. Contributed to an ERP system, enhancing user experience and administrative functionality.
              </p>
              <ul className="list-disc ml-4 text-gray-300 text-xs sm:text-sm space-y-1.5 font-neue">
                <li>
                  Led development of user profile features and converted Figma designs into responsive UI components using React.js and Tailwind CSS.
                </li>
                <li>
                  Built chat, calendar, and notification interfaces, integrating APIs to support real-time updates and interaction.
                </li>
                <li>
                  Collaborated with cross-functional team members to ensure smooth coordination and on-time feature delivery.
                </li>
                <li className="text-teal-300 font-medium">
                  Tech stack: React.js, JavaScript, TypeScript, React Query, Context API, Ant Design, Tailwind CSS.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="education" aria-label="Education History" className="flex-1">
        <div className="flex items-center justify-start mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-founderGrotest text-white">
            Education<span className="text-teal-400">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <article className="relative pl-6 border-l-2 border-teal-500/50">
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-black" />
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-neue">
                  BSc in Computer Science & Engineering
                </h3>
                <span className="text-xs sm:text-sm text-teal-400 font-medium px-2.5 py-0.5 rounded-full bg-teal-950/60 border border-teal-500/20">
                  2019 – 2023
                </span>
              </div>
              <p className="text-base text-gray-300 font-neue">Dhaka City College</p>
            </div>
          </article>

          <article className="relative pl-6 border-l-2 border-teal-500/50">
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-black" />
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-neue">
                  Higher Secondary Certificate
                </h3>
                <span className="text-xs sm:text-sm text-gray-400 px-2.5 py-0.5 rounded-full bg-zinc-800/60 border border-zinc-700/40">
                  2016 – 2018
                </span>
              </div>
              <p className="text-base text-gray-300 font-neue">Dhaka City College</p>
            </div>
          </article>

          <article className="relative pl-6 border-l-2 border-teal-500/50">
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-black" />
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-neue">
                  Secondary School Certificate
                </h3>
                <span className="text-xs sm:text-sm text-gray-400 px-2.5 py-0.5 rounded-full bg-zinc-800/60 border border-zinc-700/40">
                  2016 – 2018
                </span>
              </div>
              <p className="text-base text-gray-300 font-neue">Motijheel Govt. Boys High School</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Educations;
