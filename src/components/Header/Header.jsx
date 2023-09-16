const Header = () => {
  return (
    <div className="navbar flex-wrap  bg-base-100">
      <div className="flex-col mx-auto lg:flex-row lg:flex-1">
        <img
          className="w-20 mr-5"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
          alt=""
        />
        <a className=" text-2xl">BUET Cricket Club</a>
      </div>
      <div className="flex-col mx-auto md:flex-row md:flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Match Schedule</a>
          </li>
        </ul>
        <button className="btn bg-rose-800 text-white">Registration</button>
      </div>
    </div>
  );
};

export default Header;
