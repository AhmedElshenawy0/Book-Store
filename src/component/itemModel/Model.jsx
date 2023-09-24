import { Link } from "react-router-dom";
import Rating from "../bookSlider/Rating";
import "./model.css";
import { FaWindowClose } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { CardContext } from "../CartProvider";

const Model = ({ book, open }) => {
  const { addToCart } = useContext(CardContext);
  const [qty, setQty] = useState(1);
  return (
    <div className="model-container" onClick={() => open(false)}>
      <div className="model" onClick={(e) => e.stopPropagation()}>
        <FaWindowClose className="close" onClick={() => open(false)} />
        <img src={book.image} alt="" />
        <div className="model-info">
          <h1>{book.title}</h1>
          <Rating rate={book.rating} />
          <h3 className="price-heading">
            Price: <span className="price">${book.price}</span>
          </h3>
          <div className="card-info">
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            />
            <p onClick={() => addToCart({ ...book, qty })} className="add-card">
              <FaCartPlus style={{ marginRight: "10px" }} />
              Add To Cart
            </p>
          </div>
          <Link to={`/book/${book.id}`} className="details">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Model;
