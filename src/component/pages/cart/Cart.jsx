import { useContext } from "react";
import { CardContext } from "../../CartProvider";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cartItem, removeFromCart, addToCart, minusFromCart } =
    useContext(CardContext);

  const countItem = cartItem.reduce(
    (acc, cur) => acc + cur.price * +cur.qty,
    0
  );
  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <OrderSummary count={countItem} />
      <div className="cart-info">
        {cartItem.map((ele) => (
          <div key={ele.id} className="cart">
            <div className="cart-desc">
              <img src={ele.image} alt="" />
              <h3>Title: {ele.title}</h3>
            </div>
            <div className="price-info">
              <small>
                <FaRegPlusSquare
                  className="count-icon"
                  onClick={() => addToCart({ ...ele })}
                />
                {ele.qty}
                <FaRegMinusSquare
                  className="count-icon"
                  onClick={() => minusFromCart({ ...ele })}
                />
              </small>
              <p className="price">${ele.price * ele.qty}</p>
            </div>
            <FaTrashAlt
              className="trash"
              onClick={() => removeFromCart(ele.id)}
            />
            <hr className="line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
