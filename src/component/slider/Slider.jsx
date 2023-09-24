import "./slider.css";
import img1 from "../../images/book-g3d75bd6c2_1280.png";
import img2 from "../../images/book-g4011b1987_1280.png";
import img3 from "../../images/book-gc25809320_1280.jpg";
import img4 from "../../images/book-gd350875eb_1280.png";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
const Slider = () => {
  const [slideNum, setSlideNum] = useState(0);

  const handleclick = (direction) => {
    if (direction === "right") {
      setSlideNum((prev) => prev + 1);
    } else if (direction === "left") {
      setSlideNum((prev) => prev - 1);
    }
  };
  return (
    <div className="slider-container">
      {slideNum < 2 && (
        <BsFillArrowRightCircleFill
          onClick={() => setSlideNum(slideNum + 1)}
          className="right-icon"
        />
      )}
      <div
        className="slider-wraper"
        style={{ transform: `translateX(${slideNum * -100}vw)` }}
      >
        <div className="slide first">
          <div className="slide-img">
            <img src={img1} alt="" />
          </div>
          <div className="slide-info">
            <h3>Check Out The New Title</h3>
            <p>We send you what you need at home</p>
          </div>
        </div>
        <div className="slide second">
          <div className="slide-img">
            <img src={img2} alt="" />
          </div>
          <div className="slide-info">
            <h3>Check Out The New Title</h3>
            <p>We send you what you need at home</p>
          </div>
        </div>
        <div className="slide third">
          <div className="slide-img">
            <img src={img4} alt="" />
          </div>
          <div className="slide-info">
            <h3>Check Out The New Title</h3>
            <p>We send you what you need at home</p>
          </div>
        </div>
      </div>
      {slideNum > 0 && (
        <BsFillArrowLeftCircleFill
          className="left-icon"
          onClick={() => setSlideNum(slideNum - 1)}
        />
      )}
    </div>
  );
};

export default Slider;
