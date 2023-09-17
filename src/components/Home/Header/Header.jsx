import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar flex-wrap  bg-base-100">
      <div className="flex-col mx-auto lg:flex-row lg:flex-1">
        <img
          className="w-20 mr-5"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
          alt=""
        />
        <a className=" text-2xl">BUET Employer Cricket Club</a>
      </div>
      <div className="flex-col mx-auto md:flex-row md:flex-none">
        <nav className="menu menu-horizontal  px-1 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Match Schedule</Link>
          </li>
          <li>
            <Link to="/allPlayer">All Players</Link>
          </li>
        </nav>
        <Link
          to="/Registration"
          className="btn hover:bg-blue-800 bg-rose-800 text-white"
        >
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Header;
