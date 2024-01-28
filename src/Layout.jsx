import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

const Layout = () => {
  return (
    <>
      <div className=" lg:mx-auto lg:grid lg:grid-cols-template bg-background ">
        <div className="lg:col-start-2 lg:col-end-3 ">
          <div>
            <Header />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 bg-background lg:h-screen lg:w-2/12">
              <Navbar />
            </div>
            <div className="absolute inset-y-0 right-0 lg:h-screen bg-background-light lg:w-10/12">
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
