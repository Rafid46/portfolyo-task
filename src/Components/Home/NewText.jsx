import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomInt = (max) => Math.floor(Math.random() * max);

export default function NewText() {
  const text = "Frontend";
  const duration = 800;
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFirstRender.current) {
        clearInterval(interval);
        isFirstRender.current = false;
        return;
      }
      if (interations.current < text.length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= interations.current
              ? text[i]
              : alphabets[getRandomInt(26)]
          )
        );
        interations.current += 0.1;
      } else {
        setTrigger(false);
        clearInterval(interval);
      }
    }, duration / (text.length * 10));

    return () => clearInterval(interval);
  }, [text, duration, trigger]);

  return (
    <div
      className="overflow-hidden py-2 flex cursor-default"
      onMouseEnter={triggerAnimation}
    >
      <AnimatePresence>
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={`font-grotest text-3xl sm:text-5xl lg:text-8xl font-thin text-gray-200 ${
              letter === " " ? "w-2 sm:w-3" : ""
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
          >
            {letter}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
