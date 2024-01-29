import Logo from "../assets/logo.svg";
import Search from "../assets/seearch.svg";

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-4 p-4 ">
        <div className="flex flex-row items-center gap-4">
          <img className=" h-6 w-6" src={Logo} alt="Notflix logo" />
          <h1 className="font-bold text-accent uppercase">Notflix</h1>
        </div>

        <label className="relative block pl-32 ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-36">
            <img className=" h-4 w-4 pl-1" src={Search} alt="Notflix logo" />
          </span>
          <input
            className=" placeholder:text-white block bg-background-light lg:w-[555px] border border-accent rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-accent focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
        </label>
      </div>
    </>
  );
};

export default Header;
