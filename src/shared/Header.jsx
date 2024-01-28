import Logo from "../assets/logo.svg";
import Search from "../assets/seearch.svg";

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center lg:gap-4 lg:p-4 ">
        <div className="flex flex-row items-center lg:gap-4">
          <img className=" lg:h-6 lg:w-6" src={Logo} alt="Notflix logo" />
          <h1 className="font-bold text-accent uppercase">Notflix</h1>
        </div>

        <label className="relative block lg:pl-32 ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-36">
            <img
              className=" lg:h-4 lg:w-4 lg:pl-1"
              src={Search}
              alt="Notflix logo"
            />
          </span>
          <input
            className=" placeholder:text-white block bg-background-light lg:w-[555px] border border-accent rounded-md lg:py-2 lg:pl-9lg: pr-3 shadow-sm focus:outline-none focus:ring-accent focus:ring-1 sm:text-sm"
            placeholder="Search movie..."
            type="text"
            name="search"
          />
        </label>
      </div>
    </>
  );
};

export default Header;
