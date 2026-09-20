/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { GoDot } from "react-icons/go";
import { useInView } from "react-intersection-observer";

const Skill = ({ data, index }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);
  return (
    <motion.div
      id="skills"
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      className="flex items-center mr-4 mb-4 mx-5 lg:mx-0"
    >
      {/* {index !== data?.user?.skills?.length - 1 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl ml-4 font-brolimo  mr-5"
        >
          <GoDot className="text-gray-500" />
        </motion.p>
      )} */}
    </motion.div>
  );
};

const SkillsList = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 lg:gap-5">
      <p className="text-yellow-400 text-sm lg:text-5xl font-poppins font-normal">
        JavaScript
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-orange-500 text-sm lg:text-5xl font-poppins font-normal">
        HTML5
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-blue-500 text-sm lg:text-5xl font-poppins font-normal">
        CSS
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-green-500 text-sm lg:text-5xl font-poppins font-normal">
        Node
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-gray-500 text-sm lg:text-5xl font-poppins font-normal">
        Express
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-green-600 text-sm lg:text-5xl font-poppins font-normal">
        MongoDB
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-teal-400 text-sm lg:text-5xl font-poppins font-normal">
        Tailwind CSS
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-blue-300 text-sm lg:text-5xl font-poppins font-normal">
        React
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-red-500 text-sm lg:text-5xl font-poppins font-normal">
        Ant Design
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-amber-500 text-sm lg:text-5xl font-poppins font-normal">
        Firebase
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-red-600 text-sm lg:text-5xl font-poppins font-normal">
        Git
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-black text-sm lg:text-5xl font-poppins font-normal">
        GitHub
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-blue-600 text-sm lg:text-5xl font-poppins font-normal">
        Axios
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-pink-400 text-sm lg:text-5xl font-poppins font-normal">
        Framer Motion
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-red-700 text-sm lg:text-5xl font-poppins font-normal">
        Mongoose
      </p>
      <p className="text-3xl text-black mx-0 lg:mx-8">.</p>
      <p className="text-blue-700 text-sm lg:text-5xl font-poppins font-normal">
        Typescript
      </p>
    </div>
  );
};

export default SkillsList;
