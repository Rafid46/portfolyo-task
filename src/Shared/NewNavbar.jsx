import TestNavbar from "./TestNavbar";
import { RiMenu2Line } from "react-icons/ri";

const NewNavbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <details className="dropdown">
            <summary className="m-1">
              <p className="text-3xl text-white">
                {" "}
                <RiMenu2Line />
              </p>
            </summary>
            <ul className="shadow dropdown-content z-[1] w-[500px] lg:w-[1600px] mx-auto -ml-2">
              <TestNavbar></TestNavbar>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
