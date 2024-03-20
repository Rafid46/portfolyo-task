import { useState } from "react";
import TestNavbar from "./TestNavbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const links = (
    <>
      <a
        href="/"
        title=""
        className="text-sm font-thin text-white transition-all duration-200 lg:text-lg hover:text-opacity-70 focus:text-opacity-70"
      >
        Home
      </a>
      <a
        href="#"
        title=""
        className="text-sm font-thin text-white transition-all duration-200 lg:text-lg hover:text-opacity-70 focus:text-opacity-70"
      >
        About
      </a>
      <a
        href="#"
        title=""
        className="text-sm font-thin text-white transition-all duration-200 lg:text-lg hover:text-opacity-70 focus:text-opacity-70"
      >
        Contact
      </a>
    </>
  );
  return (
    <div>
      <header className="">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- lg+ --> */}
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <p className="text-3xl font-grotest font-bold">Portfolyo</p>
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex p-2   transition-all duration-200 rounded-md md:hidden"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* <div className="hidden md:flex md:items-center md:space-x-10">
              <TestNavbar></TestNavbar>
            </div> */}
            <div className="hidden md:flex md:items-center md:space-x-10">
              {links}
            </div>
            {/* <TestNavbar></TestNavbar> */}
          </nav>

          {/* <!-- xs to lg --> */}
          {isMobileMenuOpen && (
            <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex p-2 transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className="flex flex-col items-center mt-10 space-y-2">
                {links}
              </nav>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
