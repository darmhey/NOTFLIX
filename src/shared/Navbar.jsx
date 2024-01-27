import { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import popular from "../assets/popular.svg";
import upcoming from "../assets/upcoming.svg";
import toprated from "../assets/toprated.svg";

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className=" flex flex-col gap-2 ml-4 text-white ">
        <Link onClick={() => setActive(0)} to="/">
          <div
            aria-selected={active === 0 ? "true" : "false"}
            className="flex flex-row gap-4  aria-selected:bg-background-light py-2 rounded-l"
          >
            <img src={home} alt="" />
            <h3>Home</h3>
          </div>
        </Link>
        <Link to="popular">
          <div
            onClick={() => setActive(1)}
            aria-selected={active === 1 ? "true" : "false"}
            className="flex flex-row gap-4 aria-selected:bg-background-light py-2 rounded-l"
          >
            <img src={popular} alt="" />
            <h3>Popular</h3>
          </div>
        </Link>
        <Link to="topRated">
          <div
            onClick={() => setActive(2)}
            aria-selected={active === 2 ? "true" : "false"}
            className="flex flex-row gap-4 aria-selected:bg-background-light py-2 rounded-l"
          >
            <img src={toprated} alt="" />
            <h3>Top Rated</h3>
          </div>
        </Link>
        <Link to="upcoming">
          <div
            onClick={() => setActive(3)}
            aria-selected={active === 3 ? "true" : "false"}
            className="flex flex-row gap-4 aria-selected:bg-background-light py-2 rounded-l"
          >
            <img src={upcoming} alt="" />
            <h3>Upcoming</h3>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
