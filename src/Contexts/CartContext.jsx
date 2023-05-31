import { createContext, useEffect, useState } from "react";
import TempCart from "../assets/Data/tempCartData.json";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, q) => {
    const itemToCart = { ...item, quantity: q };

    const existingItem = cart.findIndex((cartItem) => cartItem.id === itemToCart.id);

    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += q;
    } else {
      setCart((prevCart) => [...prevCart, itemToCart]);
    }
  };

  const handleQuantityChange = (item, q) => {
    // funtion for handling input of quantity button from shoppingCart
  }

  const contextValues = {
    cart,
    addToCart,
    // removeFromCart,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
