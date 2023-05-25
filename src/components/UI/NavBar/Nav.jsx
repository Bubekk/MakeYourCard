import "../style/NavStyle.scss";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

function Nav() {
  return <div className="navbar">
    <div className="empty"></div>
    <div className="navbar__logo">
        <h1 className="navbar__logo-text">Make Your Card</h1>
    </div>
    <div className="navbar__buttons">
        <Link to="/cart"><NavButton className="cart" /></Link>
        <Link to="/"><NavButton className="home" /></Link>
        <Link to="/info"><NavButton className="info" /></Link>
    </div>
  </div>;
}

export default Nav;
