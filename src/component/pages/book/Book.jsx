import { useParams } from "react-router-dom";
import data from "../../../Data";
import Rating from "../../bookSlider/Rating";
import { FaCartPlus } from "react-icons/fa";
import "./book.css"
import { useContext, useState } from "react";
import { CardContext } from "../../CartProvider";

const Book = () => {
  const param = useParams();
  const book = data.find((ele) => ele.id === +param.id);
  const {addToCart} = useContext(CardContext)
  const [qty, setQty] = useState()
  return (
    <>
      <hr />
      <div className="book-container">
        <div className="book-details">
        <img src={book.image} alt="" />
        <div className="book-info">
          <h1>{book.title}</h1>
          <Rating rate={book.rating} />
          <h3 className="price-heading">
            Price: <span className="price">${book.price}</span>
          </h3>
          <div className="card-info">
            <input type="number" value={qty} onChange={(e) => setQty(parseInt(e.target.value))}/>
            <p onClick={() => addToCart({...book, qty})} className="add-card">
              <FaCartPlus style={{ marginRight: "10px" }} />
              Add To Cart
            </p>
          </div>
        </div>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos
          inventore repudiandae dolore doloremque sunt cum, eius quas adipisci
          aut facilis explicabo placeat quod id tempore aperiam labore tempora
          libero, consectetur suscipit. Est sunt autem nemo, delectus recusandae
          enim mollitia sit numquam, repellendus reiciendis deleniti sint error
          maiores temporibus ab?
        </p>
      </div>
    </>
  );
};

export default Book;
