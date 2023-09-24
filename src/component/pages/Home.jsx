import Services from "../../component/services/Services";
import Slider from "../../component/slider/Slider";
import data from "../../Data";
import BookSlider from "../../component/bookSlider/BookSlider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <BookSlider data={data} />
    </div>
  );
};

export default Home;
