import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //getting local data to set cart
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  //getting local data everytime when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //function for adding new item to cart
  const addToCart = (item, q, description) => {
    const itemToCart = { ...item, quantity: q, description: description };

    const existingItem = cart.findIndex((cartItem) => cartItem.id === itemToCart.id);

    //checking if item exist if true we add quantity to existing product not new item again
    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += q;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, itemToCart]);
    }
  };

  //function for removing item from cart
  const removeFromCart = (itemID) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id != itemID);
    setCart(updatedCart);
  };

  //function for changing quantity of item with "+"/"-" buttons
  const handleQuantityChangeButton = (itemId, q, value) => {
    const updatedCart = [...cart];
    const itemToChange = cart.findIndex((cartItem) => cartItem.id === itemId);

    if (value === "minus") {
      updatedCart[itemToChange].quantity -= parseInt(q, 10);
      if (updatedCart[itemToChange].quantity < 0) {
        updatedCart[itemToChange].quantity = 0;
        setCart(updatedCart);
      } else {
        setCart(updatedCart);
      }
    } else if (value === "plus") {
      updatedCart[itemToChange].quantity += parseInt(q, 10);
      setCart(updatedCart);
    }
  };

  //function for changing item quantity with input in between the "+"/"-" buttons
  const handleQuantityChangeInput = (itemId, value) => {
    const updatedCart = [...cart];
    const itemToChange = cart.findIndex((cartItem) => cartItem.id === itemId);
    if (value === "") {
      value = 0;
    }
    updatedCart[itemToChange].quantity = parseInt(value, 10);
    setCart(updatedCart);
  };

  const contextValues = {
    cart,
    addToCart,
    handleQuantityChangeButton,
    handleQuantityChangeInput,
    removeFromCart,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
