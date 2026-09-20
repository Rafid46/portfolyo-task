import { useState, useEffect, useRef } from "react";

export const Mascot = ({
  directions = "/mascots/rafid-directions.webp",
  reactions = "/mascots/rafid-reactions.webp",
  size = 240,
  className = "",
  alt = "Rafid Mascot",
}) => {
  const containerRef = useRef(null);
  const currentDirectionRef = useRef({ col: 1, row: 1 });
  const [frame, setFrame] = useState({ col: 1, row: 1, isReaction: false });
  const [isPoked, setIsPoked] = useState(false);
  const pokeTimeoutRef = useRef(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;

    if (isReducedMotion || isTouch) {
      currentDirectionRef.current = { col: 1, row: 1 };
      setFrame({ col: 1, row: 1, isReaction: false });
      return;
    }

    const handleMouseMove = (e) => {
      if (isPoked || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < 60) {
        currentDirectionRef.current = { col: 1, row: 1 };
        setFrame({ col: 1, row: 1, isReaction: false });
        return;
      }

      const deg = (Math.atan2(dy, dx) * 180) / Math.PI;

      let col = 1;
      let row = 1;

      if (deg >= -22.5 && deg < 22.5) {
        col = 2;
        row = 1;
      } else if (deg >= 22.5 && deg < 67.5) {
        col = 2;
        row = 2;
      } else if (deg >= 67.5 && deg < 112.5) {
        col = 1;
        row = 2;
      } else if (deg >= 112.5 && deg < 157.5) {
        col = 0;
        row = 2;
      } else if (deg >= 157.5 || deg < -157.5) {
        col = 0;
        row = 1;
      } else if (deg >= -157.5 && deg < -112.5) {
        col = 0;
        row = 0;
      } else if (deg >= -112.5 && deg < -67.5) {
        col = 1;
        row = 0;
      } else if (deg >= -67.5 && deg < -22.5) {
        col = 2;
        row = 0;
      }

      currentDirectionRef.current = { col, row };
      setFrame({ col, row, isReaction: false });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isPoked]);

  useEffect(() => {
    let blinkTimer;
    let openTimer;

    const scheduleBlink = () => {
      blinkTimer = setTimeout(() => {
        if (!isPoked) {
          setFrame({ col: 1, row: 0, isReaction: true });
          openTimer = setTimeout(() => {
            if (!isPoked) {
              setFrame({
                col: currentDirectionRef.current.col,
                row: currentDirectionRef.current.row,
                isReaction: false,
              });
            }
            scheduleBlink();
          }, 140);
        } else {
          scheduleBlink();
        }
      }, 3500 + Math.random() * 2500);
    };

    scheduleBlink();

    return () => {
      clearTimeout(blinkTimer);
      clearTimeout(openTimer);
    };
  }, [isPoked]);

  const handlePoke = () => {
    if (pokeTimeoutRef.current) clearTimeout(pokeTimeoutRef.current);
    setIsPoked(true);

    const reactionFrames = [
      { col: 1, row: 1 },
      { col: 2, row: 0 },
      { col: 0, row: 1 },
      { col: 2, row: 1 },
      { col: 2, row: 2 },
    ];
    const picked =
      reactionFrames[Math.floor(Math.random() * reactionFrames.length)];

    setFrame({ col: picked.col, row: picked.row, isReaction: true });

    pokeTimeoutRef.current = setTimeout(() => {
      setIsPoked(false);
      setFrame({
        col: currentDirectionRef.current.col,
        row: currentDirectionRef.current.row,
        isReaction: false,
      });
    }, 550);
  };

  const currentSheet = frame.isReaction ? reactions : directions;
  const bgX = frame.col * 50;
  const bgY = frame.row * 50;

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      onClick={handlePoke}
      className={`relative select-none cursor-pointer overflow-hidden transition-transform duration-200 active:scale-95 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url("${currentSheet}")`,
        backgroundSize: "302% 302%",
        backgroundPosition: `${bgX}% ${bgY}%`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Mascot;
