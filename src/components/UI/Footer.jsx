import "./style/FooterStyle.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <p className="footer__contact__text">Temporary Contact info</p>
        <p className="footer__contact__text">Street temp 14</p>
        <p className="footer__contact__text">Temp City</p>
      </div>
      <div className="footer__copyright"><a href="#">@Bubekk 2023</a></div>
    </div>
  );
}

export default Footer;
