import { IconCloud } from "../../registry/magicui/icon-cloud";

const userSkills = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "mongodb",
  "firebase",
  "git",
  "github",
  "vscode",
  "vercel",
  "jira",
  "antdesign",
  "shadcnui",
  "figma",
  "redux",
  "postman",
];

const images = userSkills.map((slug) => {
  if (slug === "css3") return "https://cdn.simpleicons.org/css/css";
  if (slug === "vscode") {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg";
  }
  if (["nextdotjs", "express", "github", "vercel", "shadcnui"].includes(slug)) {
    return `https://cdn.simpleicons.org/${slug}/white`;
  }
  return `https://cdn.simpleicons.org/${slug}/${slug}`;
});

const skillCategories = [
  {
    index: "01",
    title: "Frontend & UI",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
      "Ant Design",
    ],
  },
  {
    index: "02",
    title: "State, Motion & Tooling",
    items: [
      "Zustand",
      "TanStack Query",
      "Redux",
      "GSAP",
      "Framer Motion",
      "Figma",
      "Git & GitHub",
      "Vercel",
    ],
  },
  {
    index: "03",
    title: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Postgres",
      "Prisma",
    ],
  },
];

export function IconCloudDemo() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      <div className="lg:col-span-5 relative rounded-2xl border border-white/10 bg-[#111114] p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-400">
          <span className="text-teal-400">Interactive Radar</span>
          <span>Drag · Click</span>
        </div>

        <div className="w-full flex items-center justify-center py-4 min-h-[340px] sm:min-h-[420px]">
          <IconCloud images={images} />
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase">
          <span>21 Core Technologies</span>
          <span>WebGL / Canvas</span>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-4 justify-between">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="flex-1 p-5 sm:p-6 rounded-2xl bg-[#111114] border border-white/10 hover:border-teal-400/35 transition-colors flex flex-col justify-between gap-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-archivo text-lg sm:text-xl font-semibold text-[#f4f4f0]">
                {category.title}
              </h3>
              <span className="font-mono text-xs text-teal-400">
                [{category.index}]
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-md bg-[#18181c] border border-white/10 text-xs sm:text-sm font-interTight text-zinc-200 hover:text-teal-300 hover:border-teal-400/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconCloudDemo;
