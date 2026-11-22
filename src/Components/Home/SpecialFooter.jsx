import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaArrowUp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Magnetic from "../motion/Magnetic";
import { scrollToTop } from "../../lib/smoothScroll";

const SpecialFooter = () => {
  const [dhakaTime, setDhakaTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setDhakaTime(timeStr);
      } catch {
        setDhakaTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mostafarafid45@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <footer
      aria-label="Contact and Footer"
      className="w-full bg-[#0c0c0f] border-t border-white/15 pt-10 sm:pt-12 pb-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-white/10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for opportunities</span>
              </div>

              {dhakaTime && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-mono text-zinc-400">
                  <FaClock
                    className="text-teal-400 text-xs shrink-0"
                    aria-hidden="true"
                  />
                  <span>Dhaka, BD (GMT+6)</span>
                  <span className="text-zinc-200">{dhakaTime}</span>
                </div>
              )}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-archivo text-[#f4f4f0] leading-tight mb-4">
              Let&apos;s build something exceptional together
              <span className="text-teal-400">.</span>
            </h2>

            <p className="font-interTight text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-6">
              Frontend Developer based in Dhaka, Bangladesh. Passionate about
              building fast, accessible, and aesthetically elevated digital
              experiences. Open for full-time engineering roles and innovative
              collaborations worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Magnetic strength={0.35}>
                <a
                  href="mailto:mostafarafid45@gmail.com"
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-teal-400 hover:bg-[#f4f4f0] text-[#08080a] font-archivo font-semibold text-xs sm:text-sm uppercase transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
                >
                  <span>Send an Email</span>
                  <BsArrowUpRight aria-hidden="true" />
                </a>
              </Magnetic>

              <Magnetic strength={0.35}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#141418] hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/15 font-interTight text-xs sm:text-sm transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <FaCheck
                        className="text-emerald-400 text-xs"
                        aria-hidden="true"
                      />
                      <span className="text-emerald-400 font-medium">
                        Copied to clipboard!
                      </span>
                    </>
                  ) : (
                    <>
                      <FaCopy
                        className="text-teal-400 text-xs"
                        aria-hidden="true"
                      />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </Magnetic>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111114] border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase text-teal-400">
                  Direct Inquiries
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex flex-col gap-2.5 font-interTight">
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#18181c] border border-white/10 hover:border-teal-400/35 transition-colors">
                  <a
                    href="mailto:mostafarafid45@gmail.com"
                    className="flex items-center gap-3 text-sm text-zinc-200 hover:text-teal-400 transition-colors min-w-0"
                  >
                    <FaEnvelope
                      className="text-teal-400 text-sm shrink-0"
                      aria-hidden="true"
                    />
                    <span className="truncate">mostafarafid45@gmail.com</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700/60 transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy email address"
                    title={copied ? "Copied!" : "Copy email"}
                  >
                    {copied ? (
                      <FaCheck
                        className="text-emerald-400 text-sm"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaCopy
                        className="text-teal-400 text-sm"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-300 p-3 rounded-xl bg-[#141418] border border-white/10">
                  <FaMapMarkerAlt
                    className="text-teal-400 text-sm shrink-0"
                    aria-hidden="true"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-mono uppercase text-zinc-500">
                  Connect &amp; Socials
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Rafid46"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#18181c] hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-teal-400/50 transition-all font-mono text-xs uppercase"
                  >
                    <FaGithub className="text-base" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mostafa-al-rafid-901b27262/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#18181c] hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-teal-400/50 transition-all font-mono text-xs uppercase"
                  >
                    <FaLinkedinIn className="text-base" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-2 flex flex-col items-center justify-center overflow-hidden select-none">
          <p className="text-center text-[8.5vw] lg:text-[7.5vw] font-archivo font-bold text-zinc-800/80 hover:text-zinc-600 transition-colors leading-none uppercase [letter-spacing:-0.04em]">
            MOSTAFA AL RAFID
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} Mostafa Al Rafid. All rights reserved.
          </p>

          <Magnetic strength={0.3}>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141418] hover:bg-zinc-800 text-zinc-300 hover:text-teal-400 border border-white/15 hover:border-teal-400/40 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <FaArrowUp className="text-xs" aria-hidden="true" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default SpecialFooter;
