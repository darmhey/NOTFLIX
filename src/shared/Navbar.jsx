import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import popular from "../assets/popular.svg";
import upcoming from "../assets/upcoming.svg";
import toprated from "../assets/toprated.svg";

const Navbar = () => {
  return (
    <>
      <nav className=" flex flex-col gap-8 mt-8 ml-4 text-white ">
        <Link to="/">
          <div className="flex flex-row gap-4">
            <img src={home} alt="" />
            <h3>Home</h3>
          </div>
        </Link>
        <Link to="popular">
          <div className="flex flex-row gap-4">
            <img src={popular} alt="" />
            <h3>Popular</h3>
          </div>
        </Link>
        <Link to="topRated">
          <div className="flex flex-row gap-4">
            <img src={toprated} alt="" />
            <h3>Top Rated</h3>
          </div>
        </Link>
        <Link to="upcoming">
          <div className="flex flex-row gap-4">
            <img src={upcoming} alt="" />
            <h3>Upcoming</h3>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
