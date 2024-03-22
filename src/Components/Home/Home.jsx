import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
const Home = () => {
  const SpotlightButton = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        const { width } = e.target.getBoundingClientRect();
        const offset = e.offsetX;
        const left = `${(offset / width) * 100}%`;

        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      };

      const handleMouseLeave = () => {
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
      };

      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    }, []);

    return (
      <motion.button
        whileTap={{ scale: 0.985 }}
        ref={btnRef}
        className="relative w-[200px] lg:w-[300px] overflow-hidden rounded-md border-[1px] px-4 py-3 text-sm lg:text-lg font-medium text-white"
      >
        <span className="uppercase pointer-events-none relative z-10 mix-blend-difference">
          Contact
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
        />
      </motion.button>
    );
  };
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <div>
      <div className="bg-transparent">
        <section className="bg-transparent bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="">
                <div>
                  <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                    A social media for learners
                  </p>
                  <div className="flex flex-col">
                    <div>
                      <h1 className="software font-grotest text-4xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-8xl">
                        Software
                      </h1>
                      <div
                        style={{
                          left: cursorX + "px",
                          top: cursorY + "px",
                        }}
                        className="cursor"
                      ></div>
                    </div>

                    <span className="typeAnimation text-[7vw] font-bold font-poppins leading-none lg:leading-[160px]">
                      Developers
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <SpotlightButton />
                </div>

                <p
                  style={{
                    position: "relative",
                    zIndex: 1, // Ensure the paragraph is on top of other elements to receive mouse events
                  }}
                  className="software mt-5 text-gray-200"
                >
                  I am a developer specializing in 3D visuals, user interfaces,
                  and web applications, based in Los Angeles, America. With 5
                  years of experience as a React developer, I have refined my
                  skills in JavaScript and am currently deepening my knowledge
                  in TypeScript to broaden my expertise
                </p>
              </div>

              <div className="flex items-center">
                <div>
                  <img
                    className=""
                    src="https://i.ibb.co/fdn1Y38/neon-5.png"
                    alt=""
                  />
                </div>
                <div>
                  <a className="fancy myCustom">
                    <span className="top-key"></span>
                    <span className="text uppercase text-gray-400 font-neue tracking-[7px]">
                      resume
                    </span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
