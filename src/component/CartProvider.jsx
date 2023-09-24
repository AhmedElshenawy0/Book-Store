import React, { createContext, useState } from "react";
export const CardContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  // Add to cart
  const addToCart = (item) => {
    const isItemExist = cartItem.find((ele) => ele.id === item.id);
    if (isItemExist) {
      isItemExist.qty += 1;
      setCartItem([...cartItem]);
    } else {
      setCartItem((prev) => [...prev, item]);
    }
  };

  const minusFromCart = (item) => {
    const isItemExist = cartItem.find((ele) => ele.id === item.id);
    if (isItemExist) {
      isItemExist.qty -= 1;
      setCartItem([...cartItem]);
    } 
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const cart = cartItem.filter((ele) => ele.id !== id);
    setCartItem(cart);
  };
  return (
    <CardContext.Provider value={{ cartItem, addToCart, removeFromCart, minusFromCart }}>
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;
