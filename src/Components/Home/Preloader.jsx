import { motion } from "framer-motion";
const Preloader = () => {
  return (
    <div>
      <div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
          className="w-screen flex items-center justify-center h-screen bg-[#1e3e62] !overflow-hidden"
        >
          <div>
            <div className="banter-loader">
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
