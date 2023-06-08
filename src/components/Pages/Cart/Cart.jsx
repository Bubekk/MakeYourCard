import "./style/CartStyle.scss";
import { useContext, useState, setState } from "react";
import { CartContext } from "../../../Contexts/CartContext";
import ShoppingCart from "./ShoppingCart";
import Summary from "./Summary";
import Checkout from "./Checkout";

function Cart() {
  const cartProducts = useContext(CartContext);
  const items = cartProducts.cart;
  const handleQuantityChangeButton = cartProducts.handleQuantityChangeButton;
  const handleQuantityChangeInput = cartProducts.handleQuantityChangeInput;
  const removeFromCart = cartProducts.removeFromCart;

  //toggling Buying tag
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  //handling buy button
  const handleBuyClick = () => {
    setCheckoutIsShown(!checkoutIsShown);
    console.log(checkoutIsShown);
  };

  return (
    <div className="cart">
      <div className="cart__shopping-cart">
        <ShoppingCart
          items={items}
          handleQuantityChangeButton={handleQuantityChangeButton}
          handleQuantityChangeInput={handleQuantityChangeInput}
          removeFromCart={removeFromCart}
        />
      </div>
      <div className="cart__summary">
        <Summary handleBuyClick={handleBuyClick} items={items} />
      </div>
      <Checkout toggleShown={checkoutIsShown} />
    </div>
  );
}

export default Cart;
