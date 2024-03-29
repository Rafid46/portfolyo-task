import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Skills from "./Skills";
import doodle from "../../assets/doodle.png";
// import banner from "https://i.ibb.co/fdn1Y38/neon-5.png";
import { IoIosArrowUp } from "react-icons/io";
import Services from "../Home/Services";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import png from "../../assets/neon_5.png";
// import Testimonials from "./Testimonials";
const Home = () => {
  const [data, setData] = useState({});
  const [topButton, setTopButton] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
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
        className="relative w-[200px] lg:w-[200px] overflow-hidden rounded-md border-[1px] px-3 py-2 text-sm lg:text-lg font-medium text-white border-gray-400"
      >
        <span className="text-base font-neue uppercase pointer-events-none relative z-10 mix-blend-difference">
          Contact
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
        />
      </motion.button>
    );
  };
  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();
  // window.addEventListener("mousemove", (e) => {
  //   setCursorX(e.pageX);
  //   setCursorY(e.pageY);
  // });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("error fetching data");
      }
    };
    fetchData();
  }, []);
  const title = data?.user?.about?.title;
  const titleParts = title ? title.split(" ") : " ";
  console.log(titleParts);
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value;
        var y = e.clientY * moving_value;

        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    const scrollStep = window.scrollY / 30; // Adjust the divisor for slower or faster scroll
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) clearInterval(scrollInterval);
      window.scrollBy(0, -scrollStep);
    }, 15); // Adjust the interval for smoother or faster animation
  };

  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${png})`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 300px top 200px",
        }}
      >
        <section className="bg-transparent bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="">
                <div>
                  <p className="text-3xl font-caveat font-semibold tracking-wider text-white">
                    Hello, i am
                  </p>
                  {data && (
                    <p className="typeAnimation2 text-4xl font-semibold font-poppins tracking-wider text-amber-50 uppercase">
                      {data?.user?.about?.name}
                    </p>
                  )}
                  <div className="">
                    <div className="flex flex-col">
                      <h1 className="font-grotest text-8xl font-thin text-white lg:mt-8">
                        {titleParts[0]}
                      </h1>
                      <span className="z-10 typeAnimation text-8xl font-semibold font-poppins tracking-[2px]">
                        {titleParts[1]}
                      </span>
                      {/* <div
                        style={{
                          left: cursorX + "px",
                          top: cursorY + "px",
                        }}
                        className="cursor"
                      ></div> */}
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <SpotlightButton />
                </div>

                <div className="flex items-center justify-center">
                  <div className="">
                    <p
                      style={{
                        position: "relative",
                        zIndex: 1, // Ensure the paragraph is on top of other elements to receive mouse events
                      }}
                      className="interactable mt-5 font-neue text-gray-100 text-sm"
                    >
                      {data?.user?.about?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-cover bg-center">
                <div>
                  {data && (
                    <img
                      style={{
                        borderRadius: "0.25rem", // Apply small border-radius
                      }}
                      data-value="-0.1"
                      loading="lazy"
                      className="object object-cover object-center rounded-xl border-[1px] border-gray-500 p-2"
                      src={data?.user?.about?.avatar?.url}
                      alt=""
                    />
                  )}
                </div>
                <div className="flex items-center justify-center z-50">
                  <div className="">
                    <a className="fancy myCustom">
                      <span className="top-key"></span>
                      <span className="text uppercase text-gray-400 font-neue tracking-[7px]">
                        resume
                      </span>
                      <span className="bottom-key-1"></span>
                      <span className="bottom-key-2"></span>
                    </a>
                  </div>
                  <div className="z-50">
                    <button className="Btn mb-3">
                      <span className="svgContainer">
                        <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </span>
                      <span className="BG"></span>
                    </button>
                    <button className="Btn mb-3">
                      <span className="svgContainer">
                        <svg
                          viewBox="0 0 320 512"
                          height="1.3em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </span>
                      <span className="BG"></span>
                    </button>
                    <button className="Btn mb-3">
                      <span className="svgContainer">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                      </span>
                      <span className="BG"></span>
                    </button>
                    <button className="Btn mb-3">
                      <span className="svgContainer">
                        <svg
                          viewBox="0 0 640 512"
                          fill="white"
                          height="1.4em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"></path>
                        </svg>
                      </span>
                      <span className="BG"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-4/5 mx-auto border-[0.1px] border-gray-400 mt-32 mb-10" />
        </section>
      </div>
      {/* skills */}
      <div className="max-w-screen-xl mx-auto">
        <p className="text-6xl font-brolimo font-semibold text-white mb-7">
          Skills<span className="blinking">.</span>{" "}
        </p>
        <Skills data={data}></Skills>
      </div>
      {/* services */}
      <div className="">
        <div
          data-scroll
          data-scroll-speed="-.5"
          className="border-[0.5px] border-zinc-700 rounded-xl  mx-5 py-10 mt-[400px]"
        >
          <Services data={data}></Services>
        </div>
      </div>
      {/* projects */}
      <div
        className="mt-[400px]"
        style={{
          backgroundImage: `url(${doodle})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Projects data={data}></Projects>
      </div>
      <div>
        <About data={data}></About>
      </div>
      <div className="mt-20">
        <Contact></Contact>
      </div>
      {/* <div>
        <Testimonials data={data}></Testimonials>
      </div> */}
      {topButton && (
        <button
          className="fixed bottom-[50px] right-[50px] lg:bottom-[50px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-green-400 bg-zinc-700 rounded-full flex items-center justify-center"
          onClick={scrollUp}
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
