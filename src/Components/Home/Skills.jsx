/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { GoDot } from "react-icons/go";
import { useInView } from "react-intersection-observer";

const Skill = ({ data, skill, index }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      className="flex items-center mr-4 mb-4"
    >
      <p
        className={
          skill?.name === "Python"
            ? "text-5xl font-poppins font-thin text-green-400"
            : skill?.name === "react"
            ? "text-5xl font-poppins font-thin text-blue-400"
            : skill?.name === "Figma"
            ? "text-5xl font-poppins font-thin text-pink-500"
            : skill?.name === "C++"
            ? "text-5xl font-poppins font-thin text-blue-900"
            : skill?.name === "TypeScript"
            ? "text-5xl font-poppins font-thin text-blue-400"
            : skill?.name === "Docker"
            ? "text-5xl font-poppins font-thin text-blue-300"
            : skill?.name === "Node.js"
            ? "text-5xl font-poppins font-thin text-green-600"
            : skill?.name === "MongoDB"
            ? "text-5xl font-poppins font-thin text-green-200"
            : skill?.name === "Vercel"
            ? "text-5xl font-poppins font-thin text-white"
            : skill?.name === "Three.js"
            ? "text-5xl font-poppins font-thin text-red-300"
            : skill?.name === "Redux"
            ? "text-5xl font-poppins font-thin text-pink-400"
            : skill?.name === "Javascript"
            ? "text-5xl font-poppins font-thin text-yellow-200"
            : skill?.name === "Git"
            ? "text-5xl font-poppins font-thin text-white"
            : skill?.name === "Sass"
            ? "text-5xl font-poppins font-thin text-pink-500"
            : skill?.name === "GraphQl"
            ? "text-5xl font-poppins font-thin text-pink-500"
            : skill?.name === "Next.js"
            ? "text-5xl font-poppins font-thin text-white"
            : skill?.name === "React"
            ? "text-5xl font-poppins font-thin text-blue-400"
            : skill?.name === "Tailwind"
            ? "text-5xl font-poppins font-thin text-blue-500"
            : skill?.name === "HTML"
            ? "text-5xl font-poppins font-thin text-orange-500"
            : skill?.name === "Sass"
            ? "text-5xl font-poppins font-thin text-pink-500"
            : skill?.name === "CSS"
            ? "text-5xl font-poppins font-thin text-blue-200"
            : skill?.name === "Github"
            ? "text-5xl font-poppins font-thin text-gray-400"
            : ""
        }
      >
        {skill?.name}
      </p>
      {index !== data?.user?.skills?.length - 1 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl ml-4 font-brolimo  mr-5"
        >
          <GoDot className="text-gray-500" />
        </motion.p>
      )}
    </motion.div>
  );
};

const SkillsList = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {data?.user?.skills?.map((skill, index) => (
        <Skill key={skill._id} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default SkillsList;
