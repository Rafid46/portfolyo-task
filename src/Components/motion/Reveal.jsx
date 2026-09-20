/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/smoothScroll";

/**
 * Scroll-triggered entrance. When `stagger` is set the direct children animate
 * in sequence instead of the wrapper as a whole.
 */
const Reveal = ({
  children,
  className = "",
  y = 44,
  delay = 0,
  duration = 0.9,
  stagger = 0,
  start = "top 85%",
  as: Tag = "div",
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(stagger ? el.children : el, { autoAlpha: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const targets = stagger ? Array.from(el.children) : el;

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration, stagger, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
