import "./services.css";
import { BsFillGiftFill, BsArrowClockwise } from "react-icons/bs";
import { FaPaperPlane, FaShippingFast } from "react-icons/fa";
const Services = () => {
  return (
    <div className="services-container">
      <div className="service">
        <BsFillGiftFill />
        <p>Gift Card</p>
      </div>
      <div className="service">
        <FaShippingFast />
        <p>Free Shipping</p>
      </div>
      <div className="service">
        <FaPaperPlane />
        <p>Contact Us</p>
      </div>
      <div className="service">
        <BsArrowClockwise />
        <p>7 Days Return</p>
      </div>
    </div>
  );
};

export default Services;
