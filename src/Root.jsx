// import "../Home/home.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
