import { useState } from "react";
import BottomHeader from "./BottomHeader";
import "./header.css";
import { BsBook, BsSearch, BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CardContext } from "../CartProvider";
import { useContext } from "react";

const Header = () => {
  const { cartItem } = useContext(CardContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header-container">
      <div className="top-header">
        <FaBars onClick={() => setToggle((prev) => !prev)} className="bars" />
        <Link to="/" className="left-top">
          <p>
            <span className="logo1">Bo</span>
            <span className="logo2">
              ok <BsBook style={{ margin: "0 5px" }} /> Store
            </span>
          </p>
        </Link>
        <div className="middle-top">
          <input type="text" placeholder="Search in book store" />
          <BsSearch className="search-icon" />
        </div>
        <Link to="/cart" className="right-top">
          <BsCart className="cart-icon" />
          <span>{cartItem.length}</span>
        </Link>
      </div>
      <BottomHeader toggle={toggle} />
      <hr />
    </div>
  );
};

export default Header;
