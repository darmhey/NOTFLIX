import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./shared/Header";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className=" lg:mx-auto lg:grid lg:grid-cols-template mb-2 bg-background ">
        <div
          aria-selected={isMenuOpen}
          onClick={toggleMenu}
          className="sm:hidden absolute block top-4 right-6 z-50 "
        >
          <img
            className=" h-5 w-5"
            src={isMenuOpen ? close : menu}
            alt="menu button"
          />
        </div>

        <div className="lg:col-start-2 lg:col-end-3 ">
          <div>
            <Header />
          </div>
          <div className="sm:relative">
            <div
              aria-selected={isMenuOpen}
              className="absolute inset-y-0 right-0 left-1/4 pt-10 sm:pt-0 z-30 sm:absolute sm:inset-y-0 sm:left-0 bg-background-light sm:bg-background sm:h-screen sm:w-2/12 ease-in-out duration-300 aria-selected:translate-x-0 translate-x-full  sm:translate-x-0"
            >
              <Navbar />
            </div>
            <div className="sm:absolute sm:inset-y-0 sm:right-0 min-h-fit bg-background-light sm:w-10/12">
              <section>
                <Outlet />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
