import React from "react";
import { scrollToId } from "../../lib/smoothScroll";

const EditorialBar = () => {
  return (
    <section aria-label="Announcement bar" className="w-full bg-black">
      <div className="w-full flex items-center justify-between h-[calc(var(--u)*111)] px-[calc(var(--u)*57)] border-b border-white/15">
        <div className="font-archivo uppercase text-[#f4f4f4] flex items-center gap-2 text-[calc(var(--u)*14)] [letter-spacing:0.08em]">
          <span>EST</span>
          <span className="text-[#6f6f6f]">2022</span>
        </div>

        <button
          type="button"
          onClick={() => scrollToId("manifesto")}
          className="flex items-center gap-3 font-archivo font-medium uppercase text-[#f4f4f4] cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0 text-[calc(var(--u)*14)] [letter-spacing:0.08em]"
        >
          <span>SCROLL DOWN</span>
          <span className="flex items-center justify-center rounded-full border border-white text-white w-[calc(var(--u)*26)] h-[calc(var(--u)*26)]">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-[calc(var(--u)*10)] h-[calc(var(--u)*10)]"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </span>
        </button>

        <div className="font-archivo uppercase text-[#6f6f6f] text-[calc(var(--u)*14)] [letter-spacing:0.08em]">
          DHAKA, BANGLADESH
        </div>
      </div>
    </section>
  );
};

export default EditorialBar;
