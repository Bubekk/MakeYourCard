import "./style/HeroStyle.scss";
import HeroIcon from '../../../assets/icons/card_icon.png';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__header">
        <h1 className="hero__header__text">Make your own card</h1>
        <img className="hero__header__icon"  src={HeroIcon} />
      </div>
    </div>
  );
}

export default Hero;
