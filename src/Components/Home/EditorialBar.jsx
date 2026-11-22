import { scrollToId } from "../../lib/smoothScroll";

const EditorialBar = () => {
  return (
    <section
      aria-label="Portfolio metadata bar"
      className="w-full bg-[#08080a] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono uppercase text-xs text-zinc-400 flex items-center gap-2">
          <span className="text-[#f4f4f0]">EST</span>
          <span className="text-teal-400">2022</span>
          <span className="text-zinc-600">·</span>
          <span>FRONTEND SYSTEMS</span>
        </div>

        <button
          type="button"
          onClick={() => scrollToId("manifesto")}
          className="flex items-center gap-3 font-mono text-xs uppercase text-[#f4f4f0] cursor-pointer hover:text-teal-400 transition-colors bg-transparent border-none p-0"
        >
          <span>Scroll Down</span>
          <span className="flex items-center justify-center rounded-full border border-white/25 w-6 h-6">
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

        <div className="font-mono uppercase text-xs text-zinc-400">
          DHAKA, BANGLADESH
        </div>
      </div>
    </section>
  );
};

export default EditorialBar;
