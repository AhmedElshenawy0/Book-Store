import { useContext, useState } from "react";
import Rating from "./Rating";
import "./bookSlider.css";
import { FaCartPlus } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft, FaEye } from "react-icons/fa";
import Model from "../itemModel/Model";
import { CardContext } from "../CartProvider";

const BookSlider = ({ data }) => {
  const [step, setStep] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [book, setBook] = useState(false);
  const {addToCart} = useContext(CardContext)

  const handleClick = (book) =>{
    setOpenModel(true);
    setBook(book);
  }
  return (
    <div className="bookSlider-container" >
      {step > 0 && (
        <FaArrowCircleLeft className="left" onClick={() => setStep(step - 1)} />
      )}
      <div
        className="bookSlider-wraper"
        style={{ transform: `translateX(${step * -370}px)` }}
      >
        {data.map((ele) => (
          <div key={ele.id} className="bookSlider-item">
            <img src={ele.image} alt="" />
            <h2 className="book-name">{ele.title}</h2>
            <Rating rate={ele.rating} />
            <small className="price">{`$ ${ele.price}`}</small>
            <hr />
            <FaCartPlus className="card" onClick={() => addToCart({...ele, qty:1})}/>
            <FaEye className="eye" onClick={() => handleClick(ele)}/>
          </div>
        ))}
      </div>
      {step < data.length - 2 && (
        <FaArrowCircleRight
          className="right"
          onClick={() => setStep(step + 1)}
        />
      )}
      {openModel && <Model book={book} open={setOpenModel}/>}
    </div>
  );
};

export default BookSlider;
