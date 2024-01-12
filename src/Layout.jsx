import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 bg-slate-400 h-screen w-2/12">
          <Navbar />
        </div>
        <div className="absolute inset-y-0 right-0 h-screen bg-red-300 w-10/12">
          <section>
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default Layout;
