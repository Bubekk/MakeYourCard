import "../style/NavButtonStyle.scss";

function NavButton({className}) {
  return <button className={`navbar__buttons__btn navbar__buttons__btn--${className}` }></button>;
}

export default NavButton;
