import "../style/NavStyle.scss";
import NavButton from "./NavButton";

function Nav() {
  return <div className="navbar">
    <div className="empty"></div>
    <div className="navbar__logo">
        <h1 className="navbar__logo-text">Make Your Card</h1>
    </div>
    <div className="navbar__buttons">
        <NavButton className="cart" />
        <NavButton className="home" />
        <NavButton className="info" />
    </div>
  </div>;
}

export default Nav;
