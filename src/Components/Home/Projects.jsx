/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Projects = ({ data }) => {
  return (
    <div id="projects" className="mx-5">
      <button className="text-gray-200 font-brolimo  font-thin tracking-[2px] text-6xl headbutton">
        Projects
      </button>
      <HorizontalScrollCarousel data={data} />
    </div>
  );
};

export default Projects;

const HorizontalScrollCarousel = ({ data }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const cards = data?.user?.projects || [];
  const reversedCards = [...cards].reverse();
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {reversedCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card }) => {
  //   console.log(card.title);
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [modalData, setModalData] = useState(null);
  //   console.log(modalData?.image?.url);
  //   const details = modalData?.title;
  //   console.log(details);
  //   const { title } = modalData;
  //   const projectDetails = modalData.title === card.title ? modalData : null;
  //   console.log(projectDetails);
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `linear-gradient(to top,rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.8)),url(${card?.image?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-blend-darken absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="flex z-10 items-center justify-between place-content-start">
        <p className="font-poppins font-medium bg-gradient-to-br from-white/30 to-white/0 px-6 py-5 text-xl uppercase text-white backdrop-blur-lg">
          {card?.title}
        </p>
        <Link to={`${card?._id}`}>
          <p
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("my_modal_1").showModal();
            }}
            className="backdrop-blur-lg z-10 mr-5 rounded-full border-[1px] p-3 cursor-pointer"
          >
            <LuExternalLink className="text-xl text-white" />
          </p>
        </Link>
        <dialog id="my_modal_1" className="modal">
          {
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">{card?.image?.url}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          }
        </dialog>
        {/* <Link to={`/testimonial/${card?._id}}`}>
          <p
            // onClick={(e) => {
            //   setModalData(card);
            //   e.preventDefault();
            //   document.getElementById("my_modal_1").showModal();
            // }}
            className="backdrop-blur-lg z-10 mr-5 rounded-full border-[1px] p-3 cursor-pointer"
          >
            <LuExternalLink className="text-xl text-white" />
          </p>
        </Link> */}
      </div>
      {/* <Modal modalData={modalData} card={card}></Modal> */}
    </div>
  );
};
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];
