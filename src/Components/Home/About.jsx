/* eslint-disable react/prop-types */
// import bg from "../../assets/Untitled-3.png";
import { FaLinkedinIn } from "react-icons/fa";
import bg from "../../assets/mesh gradient.png";

const About = () => {
  const description =
    "Enthusiastic learner aspiring to become a skilled web developer, focused on Frontend development. Seeking opportunities to apply knowledge and contribute to dynamic projects in a collaborative environment. I am deeply passionate about creating web applications that are both efficient and scalable and eager to apply my knowledge and experience acquired during my journey to practical, real-world projects";

  return (
    <div id="about">
      <div className="relative">
        <section className="">
          <div className="flex  flex-col lg:flex-row justify-between">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                />
              </div>

              <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                <h1 className="text-4xl font-light  font-poppins  sm:text-6xl xl:text-2xl">
                  {description}
                </h1>
                <h1 className="mt-5 text-xl font-diastema  text-[#1E3E62] font-semibold">
                  CONTACT
                </h1>
                <h1 className="mt-1 text-[14px] font-neue text-xl  text-[#1E3E62] ">
                  mostafarafid45@gmail.com
                </h1>
                <div className="flex mt-4">
                  <div className="z-50 flex gap-x-2">
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
                        <FaLinkedinIn className="text-white text-2xl" />
                      </span>
                      <span className="BG"></span>
                    </button>
                    {/* <button className="Btn mb-3">
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
                    </button> */}
                  </div>
                </div>
                {/* <p className="mt-8 text-xl text-black">
                  We help you to make your remote work life easier. Build a
                  distruction free working experience.
                </p>
                <p className="mt-5 text-base text-black">
                  Instant access . No credit card required
                </p> */}
              </div>

              {/* <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                <img
                  className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full animate-custom-spin"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                  alt=""
                />
              </div> */}
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover object-center w-full h-full"
                  src={bg}
                  alt=""
                />
              </div>

              <div className="absolute inset-0"></div>

              <div className="absolute bottom-0 left-0">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center">
                    {/* <svg
                      className="w-10 h-10 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                    {/* <h2 className="font-bold text-white text-2xl font-neue">
                      Mostafa Al Rafid
                    </h2> */}
                  </div>
                  <p className="max-w-xs mt-1.5 text-lg font-light text-gray-400 font-poppins">
                    {/* {data?.user?.about?.subTitle} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
