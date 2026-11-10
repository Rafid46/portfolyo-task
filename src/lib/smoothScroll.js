import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Module-level handle so navbar / buttons can drive the same instance. */
let lenis = null;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

/**
 * Lenis smooth scroll wired into the GSAP ticker so ScrollTrigger and Lenis
 * share one RAF loop and never fight over scroll position.
 * Skipped entirely when the user prefers reduced motion — native scroll stays.
 */
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    if (prefersReducedMotion()) {
      ScrollTrigger.refresh();
      return undefined;
    }

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // leave native momentum alone on touch devices
      touchMultiplier: 1.6,
    });

    lenis = instance;

    const onScroll = () => ScrollTrigger.update();
    instance.on("scroll", onScroll);

    const raf = (time) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      instance.off("scroll", onScroll);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      instance.destroy();
      if (lenis === instance) lenis = null;
    };
  }, [enabled]);
}

export function scrollToId(id, offset = -72, duration = id === "contact" ? 7.5 : 1.2, onComplete) {
  if (id === "contact") {
    if (lenis && !prefersReducedMotion()) {
      lenis.scrollTo("bottom", { duration, onComplete });
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    if (onComplete) {
      setTimeout(onComplete, prefersReducedMotion() ? 50 : duration * 1000);
    }
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;

  if (lenis && !prefersReducedMotion()) {
    lenis.scrollTo(el, { offset, duration, onComplete });
    return;
  }
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  if (onComplete) {
    setTimeout(onComplete, prefersReducedMotion() ? 50 : duration * 1000);
  }
}

export function scrollToTop() {
  if (lenis && !prefersReducedMotion()) {
    lenis.scrollTo(0, { duration: 1.2 });
    return;
  }
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

export { gsap, ScrollTrigger };
