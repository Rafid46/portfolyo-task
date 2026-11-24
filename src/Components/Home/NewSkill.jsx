import { useState } from "react";
import { IconCloud } from "../../registry/magicui/icon-cloud";
import Reveal from "../motion/Reveal";

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

const PILL_TILTS = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-1", "rotate-1"];

const SKILL_DECKS = [
  {
    id: "frontend",
    sticker: "01 · PIXEL CRAFT",
    title: "Frontend & UI",
    subtitle: "Interfaces, design systems & crisp components",
    doodle: "palette",
    spanClass: "sm:col-span-2",
    cardClass:
      "bg-[#F2B418] text-[#17120E] rotate-[0.7deg] hover:rotate-0 shadow-[6px_6px_0px_#9D8CF5] hover:shadow-[9px_9px_0px_#9D8CF5]",
    stickerClass: "bg-[#FFFDF9] text-[#17120E]",
    hoverPill: "hover:bg-[#9D8CF5]",
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
    id: "state",
    sticker: "02 · FLOW & MOTION",
    title: "State & Tooling",
    subtitle: "Client stores, animation & shipping flow",
    doodle: "spring",
    spanClass: "",
    cardClass:
      "bg-[#9D8CF5] text-[#17120E] -rotate-[1.2deg] hover:rotate-0 shadow-[6px_6px_0px_#6EE7B7] hover:shadow-[9px_9px_0px_#6EE7B7]",
    stickerClass: "bg-[#F2B418] text-[#17120E]",
    hoverPill: "hover:bg-[#F2B418]",
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
    id: "backend",
    sticker: "03 · ENGINE & DB",
    title: "Backend & Data",
    subtitle: "APIs, schemas & realtime storage",
    doodle: "server",
    spanClass: "",
    cardClass:
      "bg-[#6EE7B7] text-[#17120E] rotate-[1.1deg] hover:rotate-0 shadow-[6px_6px_0px_#D94826] hover:shadow-[9px_9px_0px_#D94826]",
    stickerClass: "bg-[#D94826] text-[#FFFDF9]",
    hoverPill: "hover:bg-[#F2B418]",
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

const PaletteBuddyDoodle = () => (
  <svg
    viewBox="0 0 82 54"
    fill="none"
    aria-hidden="true"
    className="w-16 h-11 shrink-0"
  >
    <rect
      x="10"
      y="10"
      width="42"
      height="34"
      rx="11"
      fill="#FFFDF9"
      stroke="#17120E"
      strokeWidth="2.4"
    />
    <path
      d="M24 22V25M36 22V25"
      stroke="#17120E"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M26 31C28 34 32 34 34 31"
      stroke="#17120E"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="58" cy="14" r="6" fill="#D94826" stroke="#17120E" strokeWidth="2.2" />
    <circle cx="67" cy="27" r="5" fill="#9D8CF5" stroke="#17120E" strokeWidth="2.2" />
    <circle cx="57" cy="39" r="4.5" fill="#6EE7B7" stroke="#17120E" strokeWidth="2.2" />
  </svg>
);

const SpringBuddyDoodle = () => (
  <svg
    viewBox="0 0 68 50"
    fill="none"
    aria-hidden="true"
    className="w-14 h-10 shrink-0"
  >
    <rect
      x="14"
      y="8"
      width="32"
      height="26"
      rx="9"
      fill="#FFFDF9"
      stroke="#17120E"
      strokeWidth="2.4"
    />
    <path
      d="M25 18V20M35 18V20"
      stroke="#17120E"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M27 25C29 27.5 31 27.5 33 25"
      stroke="#17120E"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M20 34C20 40 40 40 40 34M22 41H38"
      stroke="#17120E"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M54 9L56 14L61 16L56 18L54 23L52 18L47 16L52 14L54 9Z"
      fill="#F2B418"
      stroke="#17120E"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ServerBuddyDoodle = () => (
  <svg
    viewBox="0 0 68 50"
    fill="none"
    aria-hidden="true"
    className="w-14 h-10 shrink-0"
  >
    <rect
      x="10"
      y="10"
      width="40"
      height="28"
      rx="9"
      fill="#FFFDF9"
      stroke="#17120E"
      strokeWidth="2.4"
    />
    <path d="M10 23H50" stroke="#17120E" strokeWidth="2.2" />
    <circle cx="22" cy="16.5" r="2" fill="#17120E" />
    <circle cx="38" cy="16.5" r="2" fill="#17120E" />
    <path
      d="M27 30H33"
      stroke="#17120E"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="56" cy="13" r="4.5" fill="#F2B418" stroke="#17120E" strokeWidth="2" />
  </svg>
);

const DeckDoodle = ({ type }) => {
  if (type === "palette") return <PaletteBuddyDoodle />;
  if (type === "spring") return <SpringBuddyDoodle />;
  return <ServerBuddyDoodle />;
};

export function IconCloudDemo() {
  const [selected, setSelected] = useState(null);

  const handleToggle = (item, deckTitle) => {
    setSelected((prev) =>
      prev?.name === item ? null : { name: item, deck: deckTitle }
    );
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
      <Reveal className="lg:col-span-5 flex" y={28}>
        <article className="w-full group relative rounded-[28px] bg-[#FFFDF9] text-[#17120E] border-2 border-[#17120E] p-4 sm:p-5 flex flex-col justify-between -rotate-[1.2deg] hover:rotate-0 hover:-translate-y-1 shadow-[7px_7px_0px_#6EE7B7] hover:shadow-[10px_10px_0px_#6EE7B7] transition-all duration-300">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-block px-3 py-1 rounded-lg bg-[#D94826] text-[#FFFDF9] border-2 border-[#17120E] text-[10px] font-mono font-bold uppercase shadow-[2px_2px_0px_#17120E] -rotate-2 group-hover:rotate-0 transition-transform">
              SPIN ME · 3D
            </span>
            <span className="text-[11px] font-mono font-bold text-[#17120E]/65 uppercase">
              21 Core Icons
            </span>
          </div>

          <div className="relative flex-1 rounded-[20px] bg-[#0e0d13] border-2 border-[#17120E] flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[380px] p-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "radial-gradient(#F9F0E8 0.9px, transparent 0.9px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative z-10 w-full flex items-center justify-center">
              <IconCloud images={images} />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-base sm:text-lg !font-bricolage font-bold leading-tight">
                {selected ? selected.name : "Interactive Stack"}
              </p>
              <p className="text-xs font-interTight text-[#17120E]/65">
                {selected ? selected.deck : "Drag sphere or tap any sticker"}
              </p>
            </div>
            {selected ? (
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="px-3 py-1 rounded-full bg-[#17120E] text-[#F2B418] text-xs font-mono font-bold cursor-pointer"
              >
                Reset ×
              </button>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-[#F9F0E8] border border-[#17120E]/20 text-[11px] font-mono font-bold">
                Canvas
              </span>
            )}
          </div>
        </article>
      </Reveal>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 content-between">
        {SKILL_DECKS.map((deck, deckIdx) => (
          <Reveal
            key={deck.id}
            y={28}
            delay={(deckIdx + 1) * 0.08}
            className={deck.spanClass}
          >
            <article
              className={`group h-full rounded-[26px] border-2 border-[#17120E] p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-1 ${deck.cardClass}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span
                      className={`inline-block px-3 py-0.5 rounded-lg border-2 border-[#17120E] text-[10px] font-mono font-bold uppercase shadow-[2px_2px_0px_#17120E] -rotate-2 group-hover:rotate-0 transition-transform mb-3 ${deck.stickerClass}`}
                    >
                      {deck.sticker}
                    </span>
                    <h3 className="text-xl sm:text-2xl !font-bricolage font-bold leading-tight">
                      {deck.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-interTight text-[#17120E]/75 mt-1">
                      {deck.subtitle}
                    </p>
                  </div>
                  <DeckDoodle type={deck.doodle} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {deck.items.map((item, itemIdx) => {
                  const isActive = selected?.name === item;
                  const tilt = PILL_TILTS[itemIdx % PILL_TILTS.length];
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleToggle(item, deck.title)}
                      className={`px-3.5 py-1.5 rounded-full border-2 border-[#17120E] text-xs sm:text-sm font-interTight font-semibold transition-all duration-200 cursor-pointer shadow-[2px_2px_0px_#17120E] ${
                        isActive
                          ? "bg-[#17120E] text-[#F2B418] rotate-0 -translate-y-0.5 scale-105"
                          : `bg-[#FFFDF9] text-[#17120E] ${tilt} hover:rotate-0 hover:-translate-y-0.5 ${deck.hoverPill}`
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default IconCloudDemo;
