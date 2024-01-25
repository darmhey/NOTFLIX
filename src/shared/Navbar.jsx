import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <svg>
          <div>
            <h1 className="text-white">Notflix</h1>
          </div>
        </svg>
      </div>
      <nav className=" flex flex-col min-h-full">
        <Link to="/">Home</Link>
        <Link to="popular">Popular</Link>
        <Link to="topRated">Top Rated</Link>
        <Link to="upcoming">Upcoming</Link>
      </nav>
    </>
  );
};

export default Navbar;
