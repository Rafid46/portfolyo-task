import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import NewNavbar from "../Shared/NewNavbar";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "../cursor/Cursor";
import Preloader from "../Components/Home/Preloader";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fakeDataFetch(); // Call the function to start the loading process
  }, []);
  return (
    <div>
      {isLoading ? (
        <Preloader></Preloader>
      ) : (
        <div>
          <Cursor></Cursor>
          <div className="">
            <NewNavbar></NewNavbar>
          </div>
          {/* <Navbar></Navbar> */}
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
