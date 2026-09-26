/* eslint-disable react/prop-types */
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger, prefersReducedMotion } from "../../lib/smoothScroll";

/**
 * Footer reveal: the footer is pinned to the bottom of the viewport on a lower
 * stacking layer while the opaque main content scrolls up off it, so the last
 * scroll of the page "uncovers" the footer instead of pushing it into view.
 *
 * Falls back to plain document flow when the footer is taller than the
 * viewport (it would be clipped), on small screens, or under reduced motion.
 */
const FooterReveal = ({ children, footer }) => {
  const footerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [enabled, setEnabled] = useState(false);

  const measure = useCallback(() => {
    const el = footerRef.current;
    if (!el) return;

    const footerHeight = el.offsetHeight;
    const fits =
      window.innerWidth >= 1024 &&
      footerHeight > 0 &&
      footerHeight <= window.innerHeight &&
      !prefersReducedMotion();

    setHeight(footerHeight);
    setEnabled(fits);
  }, []);

  useLayoutEffect(() => {
    measure();

    const observer = new ResizeObserver(measure);
    if (footerRef.current) observer.observe(footerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // Page height changes when the footer leaves/enters flow — ScrollTrigger
  // needs to recompute every pinned section's end position.
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [enabled, height]);

  return (
    <>
      <div className="relative z-10 bg-black">{children}</div>

      {/* Reserves the scroll distance the revealed footer occupies, and doubles
          as the #contact scroll anchor in both modes. */}
      <div
        id="contact"
        aria-hidden="true"
        style={{ height: enabled ? height : 0 }}
      />

      <div
        ref={footerRef}
        className={enabled ? "fixed bottom-0 left-0 w-full z-0" : "relative z-0"}
      >
        {footer}
      </div>
    </>
  );
};

export default FooterReveal;
