import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import NewNavbar from "../Shared/NewNavbar";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "../cursor/Cursor";

const MainLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Cursor></Cursor>
      <div className="">
        <NewNavbar></NewNavbar>
      </div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
