import Header from "./Header/Header";

import Footer from "./Footer";

import "../Home/home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="body">
        {" "}
        <Header />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
