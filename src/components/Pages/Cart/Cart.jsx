import "./style/CartStyle.scss";
import ShoppingCart from "./ShoppingCart";
import Summary from "./Summary";

function Cart() {
    return(
        <div className="cart">
            <div className="cart__shopping-cart">
                <ShoppingCart />
            </div>
            <div className="cart__summary">
                <Summary />
            </div>
        </div>
    )
}

export default Cart;