import InfiniteSpiral from "../InfiniteSpiral";

const skills = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "firebase",
  "vercel",
  "git",
  "jira",
  "github",
  "vscode",
  "antdesign",
  "mongodb",
  "nextdotjs",
  "tailwindcss",
  "shadcnui"
];

const images = skills.map((slug) => {
  let src = `https://cdn.simpleicons.org/${slug}/white`;
  if (slug === 'css3') src = `https://cdn.simpleicons.org/css/white`;
  if (slug === 'vscode') src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg`;
  
  return {
    src,
    alt: slug
  };
});

export default function NewSkill() {
  const skillCategories = [
    {
      title: "Frontend & UI",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "Ant Design"],
    },
    {
      title: "Backend & Database",
      items: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "VS Code", "Vercel", "Jira"],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full relative overflow-hidden h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl bg-zinc-950/40 border border-zinc-800/60 backdrop-blur-sm">
        <InfiniteSpiral
          items={images}
          animationMode="auto"
          speed={0.55}
          radius={170}
          cardWidth={100}
          cardHeight={100}
          verticalSpacing={60}
          perspective={1000}
          cardRadius={10}
          centerScale={1.2}
          edgeBlur={6}
          cardsPerTurn={7}
          pauseOnHover={false}
          direction="up"
          rotation={0}
          cardTilt={0}
          edgeFade={0.3}
          imageFit="cover"
          grayscale={1}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm hover:border-teal-500/30 transition-colors"
          >
            <h3 className="text-sm font-semibold text-teal-400 font-neue uppercase mb-3.5">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/60 text-xs sm:text-sm text-gray-200 hover:text-white hover:border-teal-400/50 transition-colors"
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
