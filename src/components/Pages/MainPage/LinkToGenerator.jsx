import "./style/LinkToGeneratorStyle.scss";
import LinkIcon from "../../../assets/icons/link_icon.png";

function LinkToGenerator() {
  return (
    <div className="link-hero">
      <div className="link-hero__header">
        <h1 className="link-hero__header__text">Start your project</h1>
        <img className="link-hero__icon" src={LinkIcon} />
      </div>
    </div>
  );
}

export default LinkToGenerator;
