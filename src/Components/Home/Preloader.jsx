import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReduced) {
      if (onComplete) onComplete();
      return undefined;
    }

    const duration = 900;
    const start = performance.now();
    let frameId = 0;

    const tick = (now) => {
      const ratio = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      if (counterRef.current) {
        counterRef.current.textContent = String(
          Math.round(eased * 100),
        ).padStart(2, "0");
      }

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none select-none"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1, 1, 35],
        }}
        transition={{
          duration: 2.2,
          times: [0, 0.18, 0.42, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={onComplete}
        className="w-[120px] h-[120px] rounded-full bg-transparent border border-white/30 will-change-transform"
        style={{
          boxShadow: "0 0 0 9999px #1d4ed8",
        }}
      />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 1, 0] }}
        transition={{
          duration: 2.2,
          times: [0, 0.18, 0.42, 0.62],
          ease: "easeOut",
        }}
        className="fixed inset-0 flex flex-col justify-between p-6 sm:p-10 text-white"
      >
        <div className="flex items-center justify-between text-xs font-mono uppercase text-white/80">
          <span>Mostafa Al Rafid</span>
          <span>Dhaka · BD</span>
        </div>

        <div className="flex items-end justify-between border-t border-white/20 pt-6">
          <div>
            <p className="text-xs font-mono uppercase text-teal-300 mb-2">
              Portfolio System
            </p>
            <p className="font-archivo text-2xl sm:text-4xl font-semibold uppercase text-white">
              Frontend Craft
            </p>
          </div>
          <div
            ref={counterRef}
            className="font-archivo text-5xl sm:text-7xl font-bold tabular-nums text-white leading-none"
          >
            00
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Preloader;
