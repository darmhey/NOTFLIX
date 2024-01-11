import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="popular">Popular</Link>
        <Link to="topRated">Top Rated</Link>
        <Link to="upcoming">Upcoming</Link>
      </nav>
    </>
  );
};

export default Navbar;
