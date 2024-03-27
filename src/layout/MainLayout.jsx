import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import NewNavbar from "../Shared/NewNavbar";
import LocomotiveScroll from "locomotive-scroll";

const MainLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <div className="">
        <NewNavbar></NewNavbar>
      </div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
