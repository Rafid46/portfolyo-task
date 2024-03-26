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
      <p className="text-5xl font-poppins font-thin text-gray-300">
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
