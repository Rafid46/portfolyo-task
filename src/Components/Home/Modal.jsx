/* eslint-disable react/prop-types */

const Modal = ({ modalData, card }) => {
  //   const [loader, setLoader] = useState(false);
  console.log(modalData?.title, card);
  const details = modalData?.title;
  console.log(details);
  const details2 = card?.image?.url;
  //   const { title, _id } = card;
  // const mainData=modalData?.find((data)=>data?.)
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{details2}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
