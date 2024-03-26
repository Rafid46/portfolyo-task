/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
const Services = ({ data }) => {
  console.log(data);
  return (
    <AnimatePresence>
      <motion.section
        initial={{ scale: 0, width: 0 }}
        animate={{ scale: 1, width: "100%" }} // Changed from "100vw" to "100%"
        exit={{ scale: 0, width: "100%" }} // Changed from "100vw" to "100%"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=""
      >
        <div className="mx-auto max-w-screen-xl">
          <Link data={data} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Services;
const Link = ({ data }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };
  return (
    <div className="">
      <p className="text-white uppercase font-poppins text-6xl font-thin text-end">
        My services
      </p>
      {data?.user?.services?.map((service) => (
        <div>
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="py-10 max-w-screen-xl mx-10 group relative flex items-center justify-between border-b-2 border-neutral-700 transition-colors duration-500 hover:border-neutral-50"
          >
            <div>
              <motion.div
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: -16 },
                }}
                transition={{
                  type: "spring",
                  staggerChildren: 0.075,
                  delayChildren: 0.25,
                }}
                className="mb-5 relative z-10 block text-4xl font-medium font-neue text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
              >
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="-leading-[10px] font-poppins"
                >
                  {service?.name}
                </motion.span>
              </motion.div>
              <span className="relative z-10 mt-5 text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
                {service?.desc}
              </span>
            </div>

            <motion.img
              style={{
                top,
                left,
                translateX: "-50%",
                translateY: "-50%",
              }}
              variants={{
                initial: { scale: 0, rotate: "-12.5deg" },
                whileHover: { scale: 1, rotate: "2deg" },
              }}
              transition={{ type: "spring" }}
              src={service?.image?.url}
              className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
            />

            <motion.p
              variants={{
                initial: {
                  x: "25%",
                  opacity: 0,
                },
                whileHover: {
                  x: "0%",
                  opacity: 1,
                },
              }}
              transition={{ type: "spring" }}
              className="relative z-10"
            >
              <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
