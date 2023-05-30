import { useState } from "react";
import "../style/QuantityButtonStyle.scss";

function QuantityButton(props) {

    const handleClick = (e) => {
        props.handleBtnClick(e.target.value)
    }

  return (
    <div className="quantity-button">
      <button className="quantity-button__btn quantity-button__btn--minus" value={"minus"} onClick={handleClick} >-</button>
      <div className="quantity-button__count"> {props.quantity} </div>
      <button className="quantity-button__btn quantity-button__btn--plus" value={"plus"} onClick={handleClick} >+</button>
    </div>
  );
}

export default QuantityButton;
