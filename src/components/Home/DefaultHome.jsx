import Banner from "./Banner";
import Countdown from "./Countdown";
import Gallery from "./Gallery/Gallery";
import Slider from "./Slider";
const DefaultHome = () => {
  return (
    <div>
      <Banner />
      <Countdown />
      <Slider />
      <div className="max-w-screen-2xl mx-auto">
        <Gallery />
      </div>
    </div>
  );
};

export default DefaultHome;
