/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { gsap, hasFinePointer, prefersReducedMotion } from "../../lib/smoothScroll";

/**
 * Magnetic hover wrapper — the child drifts toward the cursor and springs back.
 * No-ops on coarse pointers and under prefers-reduced-motion.
 */
const Magnetic = ({ children, strength = 0.35, radius = 1.1, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;

    const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3.out" });

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;

      // Only pull while the cursor is inside the magnetic radius.
      if (
        Math.abs(dx) > (rect.width / 2) * radius * 2 ||
        Math.abs(dy) > (rect.height / 2) * radius * 2
      ) {
        xTo(0);
        yTo(0);
        return;
      }
      xTo(dx * strength);
      yTo(dy * strength);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("blur", handleLeave, true);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("blur", handleLeave, true);
      gsap.killTweensOf(el);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength, radius]);

  return (
    <span
      ref={ref}
      className={`inline-flex will-change-transform ${className}`}
    >
      {children}
    </span>
  );
};

export default Magnetic;
