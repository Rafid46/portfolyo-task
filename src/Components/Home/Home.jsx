import EditorialHero from "./EditorialHero";
import EditorialBar from "./EditorialBar";
import EditorialManifesto from "./EditorialManifesto";
import Projects from "./Projects";
import EditorialImpact from "./EditorialImpact";
import NewSkill from "./NewSkill";
import Educations from "../Educations";
import SpecialFooter from "./SpecialFooter";
import FooterReveal from "./FooterReveal";
import Reveal from "../motion/Reveal";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#08080a] text-[#f4f4f0] font-interTight relative selection:bg-teal-400 selection:text-[#08080a]">
      <FooterReveal footer={<SpecialFooter />}>
        <main>
          <EditorialHero />
          <EditorialBar />
          <EditorialManifesto />

          <section
            id="projects"
            aria-label="Featured Projects"
            className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24"
          >
            <Reveal className="mb-10" y={28}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-teal-400 block mb-2">
                    02 — Selected Works
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo font-semibold text-[#f4f4f0]">
                    Featured Projects
                    <span className="text-teal-400">.</span>
                  </h2>
                </div>
                <p className="text-xs font-mono uppercase text-zinc-400">
                  Click preview to inspect details
                </p>
              </div>
            </Reveal>
            <Projects />
          </section>

          <section
            id="skills"
            aria-label="Skills and Technologies"
            className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24"
          >
            <Reveal className="mb-10" y={28}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-teal-400 block mb-2">
                    03 — Capabilities
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo font-semibold text-[#f4f4f0]">
                    Skills &amp; Technologies
                    <span className="text-teal-400">.</span>
                  </h2>
                </div>
                <p className="text-xs font-mono uppercase text-zinc-400">
                  Frontend · State · Backend
                </p>
              </div>
            </Reveal>
            <NewSkill />
          </section>

          <section
            id="experience"
            aria-label="Experience and Education"
            className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24"
          >
            <Reveal className="mb-10" y={28}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-teal-400 block mb-2">
                    04 — Background
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo font-semibold text-[#f4f4f0]">
                    Experience &amp; Education
                    <span className="text-teal-400">.</span>
                  </h2>
                </div>
                <p className="text-xs font-mono uppercase text-zinc-400">
                  Timeline &amp; Credentials
                </p>
              </div>
            </Reveal>
            <Educations />
          </section>
        </main>
      </FooterReveal>
    </div>
  );
};

export default Home;
