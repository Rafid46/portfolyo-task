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
  "Clean Code",
  "Responsive Design",
  "Scalable Systems",
];

const Ticker = () => {
  return (
    <div
      aria-label="Highlights marquee"
      className="w-full overflow-hidden border-y border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md py-3.5 sm:py-4 select-none"
    >
      <div className="animate-marquee items-center gap-6 sm:gap-10">
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 sm:gap-5 whitespace-nowrap"
          >
            <span className="font-neue text-xs sm:text-sm font-semibold uppercase text-zinc-300 hover:text-teal-400 transition-colors">
              {text}
            </span>
            <FaStar
              className="text-[8px] sm:text-[10px] text-teal-400 shrink-0 opacity-80"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
