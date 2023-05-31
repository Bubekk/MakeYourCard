import "../style/QuantityButtonStyle.scss";

function QuantityButton(props) {

  //handlick buttons click
    const handleClick = (e) => {
        props.handleQuantityChangeButton(e.target.id, 1, e.target.value);
    }

    //handling input change
    const handleInputChange = (e) => {
      props.handleQuantityChangeInput(e.target.id, e.target.value);
    }

  return (
    <div className="quantity-button">
      <button className="quantity-button__btn quantity-button__btn--minus" value={"minus"} id={props.item.id} onClick={handleClick} >-</button>
      <input type="text" className="quantity-button__count" value={props.item.quantity} id={props.item.id} onChange={handleInputChange} />
      <button className="quantity-button__btn quantity-button__btn--plus" value={"plus"} id={props.item.id} onClick={handleClick} >+</button>
    </div>
  );
}

export default QuantityButton;
