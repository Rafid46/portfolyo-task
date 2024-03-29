/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const trailerRef = useRef(null);

  const animateTrailer = (e, interacting) => {
    const trailer = trailerRef.current;
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
    };

    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;
      animateTrailer(e, interacting);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animateTrailer]);
  return (
    <div>
      <div ref={trailerRef} id="trailer">
        <i id="trailer-icon"></i>
      </div>
    </div>
  );
};

export default Cursor;
