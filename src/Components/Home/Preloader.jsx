import { motion } from "framer-motion";
const Preloader = () => {
  return (
    <div>
      <div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
          className="flex items-center justify-center h-screen mx-2 py-2 bg-white rounded-xl"
        >
          <div className="">
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
            {/* <div className="newLoader font-neue tracking-[2px]"></div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
