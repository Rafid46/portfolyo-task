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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      aria-label="Contact and Footer"
      className="w-full bg-zinc-950 border-t border-zinc-800/80 pt-16 sm:pt-24 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 sm:pb-20 border-b border-zinc-800/80">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-neue text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for opportunities</span>
              </div>

              {dhakaTime && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-neue text-zinc-400">
                  <FaClock
                    className="text-teal-400 text-xs shrink-0"
                    aria-hidden="true"
                  />
                  <span>Dhaka, BD (GMT+6)</span>
                  <span className="text-zinc-200 font-mono">{dhakaTime}</span>
                </div>
              )}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-founderGrotest text-white leading-tight mb-6">
              Let&apos;s build something exceptional together
              <span className="text-teal-400">.</span>
            </h2>

            <p className="font-neue text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
              Frontend Developer based in Dhaka, Bangladesh. Passionate about
              building fast, accessible, and aesthetically elevated digital
              experiences. Open for full-time engineering roles and innovative
              collaborations worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:mostafarafid45@gmail.com"
                className="min-h-[46px] px-6 py-2.5 rounded-full bg-teal-400 hover:bg-white text-black font-semibold font-neue text-sm sm:text-base transition-all flex items-center gap-2 shadow-lg shadow-teal-500/10 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
              >
                <span>Send an Email</span>
                <BsArrowUpRight
                  className="text-sm font-bold"
                  aria-hidden="true"
                />
              </a>

              <button
                onClick={handleCopyEmail}
                className="min-h-[46px] px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-neue text-sm sm:text-base transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none relative"
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
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <span className="text-xs font-semibold uppercase text-teal-400 font-neue">
                  Direct Inquiries
                </span>
                <span className="text-xs text-zinc-400 font-neue">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex flex-col gap-3 font-neue">
                <a
                  href="mailto:mostafarafid45@gmail.com"
                  className="flex items-center gap-3 text-sm sm:text-base text-zinc-200 hover:text-teal-400 transition-colors p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/80 border border-zinc-700/40"
                >
                  <FaEnvelope
                    className="text-teal-400 text-base shrink-0"
                    aria-hidden="true"
                  />
                  <span className="truncate">mostafarafid45@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-sm sm:text-base text-zinc-300 p-3 rounded-xl bg-zinc-800/20 border border-zinc-800">
                  <FaMapMarkerAlt
                    className="text-teal-400 text-base shrink-0"
                    aria-hidden="true"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs font-semibold uppercase text-zinc-400 font-neue">
                  Connect & Socials
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Rafid46"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700 hover:border-teal-400/50 transition-all font-neue text-sm"
                  >
                    <FaGithub className="text-base" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mostafa-al-rafid-901b27262/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700 hover:border-teal-400/50 transition-all font-neue text-sm"
                  >
                    <FaLinkedinIn className="text-base" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 font-neue">
              <span>Frontend Web Engineer</span>
              <span className="text-teal-400">
                React • Next.js • TypeScript
              </span>
            </div>
          </div>
        </div>

        <div className="pt-12 sm:pt-16 pb-8 flex flex-col items-center justify-center overflow-hidden select-none">
          <p className="text-center text-[10vw] sm:text-[11vw] lg:text-[11.5vw] font-founderGrotest font-bold text-zinc-800/70 hover:text-zinc-600 transition-colors leading-none uppercase">
            MOSTAFA AL RAFID
          </p>
        </div>

        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-neue text-xs sm:text-sm text-zinc-400">
          <p>
            © {new Date().getFullYear()} Mostafa Al Rafid. All rights reserved.
          </p>

          <p className="text-zinc-400">Engineered in Dhaka, Bangladesh</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-teal-400 border border-zinc-800 hover:border-teal-500/40 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default SpecialFooter;
