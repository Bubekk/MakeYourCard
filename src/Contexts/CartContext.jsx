import { createContext, useState } from "react";
import TempCart from "../assets/Data/tempCartData.json";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(TempCart);

  const addToCart = (item) => {
    setCart(...cart, item);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const contextValues = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
  <CartContext.Provider value={contextValues}>
    {children}
  </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

