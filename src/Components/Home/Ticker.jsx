import { FaStar } from "react-icons/fa";

const items = [
  "Mostafa Al Rafid",
  "Frontend Developer",
  "Dhaka, Bangladesh",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Interactive UI",
  "High Performance",
  "Clean Architecture",
  "Responsive Design",
  "GSAP Motion",
];

const Ticker = () => {
  return (
    <div
      aria-label="Highlights marquee"
      className="w-full overflow-hidden border-y border-white/10 bg-[#0d0d10] py-3.5 select-none"
    >
      <div className="animate-marquee items-center gap-6 sm:gap-10">
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 sm:gap-6 whitespace-nowrap"
          >
            <span className="font-mono text-xs sm:text-sm font-medium uppercase text-zinc-300 hover:text-teal-400 transition-colors">
              {text}
            </span>
            <FaStar
              className="text-[9px] text-teal-400 shrink-0 opacity-80"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
