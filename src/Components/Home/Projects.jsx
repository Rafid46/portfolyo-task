/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { VscGithub } from "react-icons/vsc";
import { BsArrowUpRight } from "react-icons/bs";
import diffImg from "../../assets/diff.png";
import project6 from "../../assets/project6.png";
import "./liveLinkButton.css";
const Projects = () => {
  const data = [
    {
      id: 1,
      image: project6,
      icon: <VscGithub />,
      tech: "React js . typescript . mongoose . tailwind . ant design . tanstack . zustand . firebase . Node . Express",
      name: "Learning communication",
      tag: "Education",
      link: "https://acadizo.netlify.app",
      git: "https://github.com/Rafid46/acadizo_frontend",
    },
    /*
    {
      id: 2,
      image: project1,
      icon: <VscGithub />,
      tech: "React . Mongodb . Node . Express . Firebase",
      name: "Restaurant Management",
      tag: "Restaurant Management",
      link: "https://tubular-dusk-eba567.netlify.app",
      git: "https://github.com/Rafid46/Restaurant-management",
    },
    */
    {
      id: 3,
      image: diffImg,
      icon: <VscGithub />,
      tech: "Next js . TypeScript . Tailwind CSS",
      name: "Diff Editor",
      tag: "Developer Tools",
      link: "https://diffy-eta.vercel.app/",
      git: "https://github.com/Rafid46/diff-editor",
    },
    /*
    {
      id: 4,
      image: project2,
      icon: <VscGithub />,
      tech: "React . Mongodb . Node . Express . Firebase",
      name: "Todo application",
      tag: "Task management",
      link: "https://frabjous-griffin-0a1eae.netlify.app",
      git: "https://github.com/Rafid46/to-do",
    },
    {
      id: 5,
      image: project3,
      icon: <VscGithub />,
      tech: "React . Tailwind",
      name: "E-sports blog",
      tag: "E-sports",
      link: "https://event-management-b4db5.web.app/",
      git: "https://github.com/Rafid46/event-management",
    },
    */
    {
      id: 6,
      isManyMore: true,
    },
  ];

  return (
    <div id="projects" className="mx-4 sm:mx-5">
      <HorizontalScrollCarousel data={data} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ data }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh] -mt-[100px]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {data?.map((card) => (
            <Card card={card} key={card?.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  if (card.isManyMore) {
    return (
      <div className="flex items-center justify-center w-[280px] sm:w-[350px] lg:w-[400px] h-[260px] sm:h-[320px] lg:h-[420px]">
        <div className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-neue bg-zinc-900/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-zinc-700/60 text-center">
          <span>And many more projects...</span>
        </div>
      </div>
    );
  }

  return (
    <article className="flex flex-col">
      <div className="relative w-[82vw] sm:w-[480px] md:w-[600px] lg:w-[680px] h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 group">
        <div
          style={{
            backgroundImage: `url(${card?.image})`,
          }}
          className="bg-cover bg-center w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        <div className="absolute top-4 right-4 z-10">
          <a
            target="_blank"
            href={card?.git}
            rel="noreferrer"
            aria-label={`GitHub repository for ${card?.name}`}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/15 text-white hover:text-teal-400 hover:border-teal-400/50 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
          >
            <span className="text-xl">{card?.icon}</span>
          </a>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-medium text-teal-300 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-500/30">
              {card?.tag}
            </span>
            <p className="text-xs sm:text-sm text-gray-300 truncate max-w-[60%] font-neue">
              {card?.tech}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <h3 className="text-white text-lg sm:text-2xl font-bold font-neue">
              {card?.name}
            </h3>
            <a
              href={card?.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live site for ${card?.name}`}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-teal-400 text-black hover:bg-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <BsArrowUpRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
