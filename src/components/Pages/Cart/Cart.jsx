import "./style/CartStyle.scss";
import { useContext} from "react";
import { CartContext } from "../../../Contexts/CartContext";
import ShoppingCart from "./ShoppingCart";
import Summary from "./Summary";

function Cart() {

    const cartProducts = useContext(CartContext);
    const items = cartProducts.cart;
    const handleQuantityChangeButton = cartProducts.handleQuantityChangeButton;
    const handleQuantityChangeInput = cartProducts.handleQuantityChangeInput;

    return(
        <div className="cart">
            <div className="cart__shopping-cart">
                <ShoppingCart items={items} handleQuantityChangeButton={handleQuantityChangeButton} handleQuantityChangeInput={handleQuantityChangeInput} />
            </div>
            <div className="cart__summary">
                <Summary items={items} />
            </div>
        </div>
    )
}

export default Cart;

