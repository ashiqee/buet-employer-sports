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
      <Gallery />
    </div>
  );
};

export default DefaultHome;
