import "./style/CheckoutStyle.scss";
import { Link } from "react-router-dom";
import ButtonUI from "../../UI/ButtonUI";

function Checkout(props) {
  return (
    <div className="checkout" style={{display: props.toggleShown ? 'flex' : 'none'}}>
      <div className="checkout__header">
        <h1>Your Order is in order!</h1>
      </div>
      <div className="checkout__content">
        <p>You will get recipe on you email</p>
        <sub>Maybe, probably when I finally get my hands on the backend technologies</sub> 
      </div>
      <Link to="/">
        <ButtonUI tag="Ok!" />
      </Link>
    </div>
  );
}

export default Checkout;

