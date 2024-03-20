import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import NewNavbar from "../Shared/NewNavbar";

const MainLayout = () => {
  return (
    <div>
      <NewNavbar></NewNavbar>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
