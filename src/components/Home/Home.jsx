import Header from "../Header/Header";
import Banner from "./Banner";
import Countdown from "./Countdown";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <div className="body">
        {" "}
        <Header />
        <Banner />
        <Countdown />
        <Slider />
        <Gallery />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
