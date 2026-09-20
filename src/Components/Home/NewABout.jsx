import { FaLinkedinIn, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import bg from "../../assets/mesh gradient.png";

const NewABout = () => {
  return (
    <section id="contact" aria-label="Contact and About" className="w-full">
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full max-w-[280px] lg:max-w-none lg:w-[32%] overflow-hidden rounded-2xl border border-zinc-700/60 shadow-xl">
          <img
            className="w-full h-full object-cover object-center"
            src={bg}
            alt="Abstract visual"
          />
        </div>

        <div className="w-full lg:w-[65%] flex flex-col gap-5">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase text-teal-400 font-neue mb-1">
              About & Contact
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-founderGrotest">
              Let&apos;s build something exceptional together
              <span className="text-teal-400">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base font-light font-poppins text-gray-300 leading-relaxed">
            Enthusiastic learner aspiring to become a skilled web developer,
            focused on Frontend development. Seeking opportunities to apply
            knowledge and contribute to dynamic projects in a collaborative
            environment. I am deeply passionate about creating web applications
            that are both efficient and scalable and eager to apply my knowledge
            and experience acquired during my journey to practical, real-world
            projects.
          </p>

          <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-2 font-neue">
              <a
                href="mailto:mostafarafid45@gmail.com"
                className="flex items-center gap-2.5 text-base sm:text-lg text-gray-200 hover:text-teal-400 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded"
                aria-label="Send email to mostafarafid45@gmail.com"
              >
                <FaEnvelope
                  className="text-teal-400 text-base shrink-0"
                  aria-hidden="true"
                />
                <span>mostafarafid45@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-base sm:text-lg text-gray-300">
                <FaMapMarkerAlt
                  className="text-teal-400 text-base shrink-0"
                  aria-hidden="true"
                />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Rafid46"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-teal-400/50 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 496 512"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/mostafa-al-rafid-901b27262/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-teal-400/50 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
              >
                <FaLinkedinIn className="text-xl" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewABout;
