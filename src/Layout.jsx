import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import menu from "./assets/menu.svg";

const Layout = () => {
  return (
    <>
      <div className=" lg:mx-auto lg:grid lg:grid-cols-template bg-background ">
        <div className="sm:hidden absolute block top-6 right-6 z-50">
          <img src={menu} alt="menu button" />
        </div>

        <div className="lg:col-start-2 lg:col-end-3 ">
          <div>
            <Header />
          </div>
          <div className="sm:relative">
            <div className="absolute inset-y-0 right-0 left-1/4 pt-10 sm:absolute sm:inset-y-0 sm:left-0 bg-background-light sm:bg-background sm:h-screen sm:w-2/12">
              <Navbar />
            </div>
            <div className="sm:absolute sm:inset-y-0 sm:right-0 sm:h-screen bg-background-light sm:w-10/12">
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

// inset-x-0
{
  /* <div className="sticky  top-0 h-16 bg-red-500">
          <Header />
        </div> */
}

{
  /* <div className="relative">
        <div className="absolute inset-y-0 left-0 bg-slate-400 h-screen w-2/12">
          <Navbar />
        </div>
        <div className="absolute inset-y-0 right-0 h-screen bg-red-300 w-10/12">
          <section>
            <Outlet />
          </section>
        </div>
      </div>
     */
}

//    <div className="relative ">
//    <div className="absolute left-0 bottom-0 top-16 w-2/12  bg-red-500">
//      <Navbar />
//    </div>
//    <div className="absolute bottom-0 right-0 top-16 w-10/12 bg-red-500 ">
//      <section>
//        <Outlet />
//      </section>
//    </div>
//  </div>
