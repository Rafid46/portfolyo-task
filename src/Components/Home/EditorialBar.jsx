import { scrollToId } from "../../lib/smoothScroll";

const EditorialBar = ({ isWarm = false }) => {
  return (
    <section
      aria-label="Portfolio metadata bar"
      className={`w-full bg-transparent border-y transition-colors duration-700 ${
        isWarm ? "border-[#231712]/12" : "border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div
          className={`font-mono uppercase text-xs flex items-center gap-2 transition-colors duration-700 ${
            isWarm ? "text-[#6F5D52]" : "text-zinc-400"
          }`}
        >
          <span
            className={`transition-colors duration-700 ${
              isWarm ? "text-[#231712]" : "text-[#f4f4f0]"
            }`}
          >
            EST
          </span>
          <span
            className={`transition-colors duration-700 ${
              isWarm ? "text-[#D94826]" : "text-teal-400"
            }`}
          >
            2022
          </span>
          <span className={isWarm ? "text-[#231712]/35" : "text-zinc-600"}>
            ·
          </span>
          <span>FRONTEND SYSTEMS</span>
        </div>

        <button
          type="button"
          onClick={() => scrollToId("manifesto")}
          className={`flex items-center gap-3 font-mono text-xs uppercase cursor-pointer transition-colors duration-700 bg-transparent border-none p-0 ${
            isWarm
              ? "text-[#231712] hover:text-[#D94826]"
              : "text-[#f4f4f0] hover:text-teal-400"
          }`}
        >
          <span>Scroll Down</span>
          <span
            className={`flex items-center justify-center rounded-full border w-6 h-6 transition-colors duration-700 ${
              isWarm ? "border-[#231712]/25" : "border-white/25"
            }`}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3 h-3"
              aria-hidden="true"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </span>
        </button>

        <div
          className={`font-mono uppercase text-xs transition-colors duration-700 ${
            isWarm ? "text-[#6F5D52]" : "text-zinc-400"
          }`}
        >
          DHAKA, BANGLADESH
        </div>
      </div>
    </section>
  );
};

export default EditorialBar;
