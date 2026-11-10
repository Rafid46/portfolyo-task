import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced && onComplete) {
      onComplete();
    }
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none select-none">
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
    </div>
  );
};

export default Preloader;