/* eslint-disable react/prop-types */

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FiAlertCircle } from "react-icons/fi";

const Modal = ({ modalData, isOpen, setIsOpen }) => {
  //   const [loader, setLoader] = useState(false);
  // console.log(modalData?.title, card);
  const details = modalData?.title;
  console.log(details);
  // const details2 = card?.image?.url;
  //   const { title, _id } = card;
  // const mainData=modalData?.find((data)=>data?.)
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ willChange: "opacity, transform" }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 grid place-items-center cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <p className="text-center mb-6">{modalData?.title}</p>
              <p className="text-center mb-6">{modalData?.image?.url}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
  // <div>
  //   <dialog id="my_modal_1" className="modal">
  //     <div className="modal-box">
  //       <p className="py-4">{details}</p>
  //       <div className="modal-action">
  //         <form method="dialog">
  //           <button className="btn">Close</button>
  //         </form>
  //       </div>
  //     </div>
  //   </dialog>
  // </div>
};

export default Modal;
