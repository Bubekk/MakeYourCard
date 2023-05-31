import "./style/SummaryStyle.scss";
import ButtonUI from "../../UI/ButtonUI";
import { useEffect, useState } from "react";

function Summary({ items }) {
  const [deliveryCost, setDeliveryCost] = useState(13);

  //product cost from total price of products and their quantity
  const [productCost, setProductCost] = useState(items.reduce((total, item) => total + item.price * item.quantity, 0));

  //total price of whole product cost and delivery cost
  const [totalPrice, setTotalPrice] = useState(productCost + deliveryCost);


  //watching product cost at changing quantity of product
  useEffect(() => {
    setProductCost(items.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [items]);

  //watching total cost at changing product or delivery option
  useEffect(() => {
    setTotalPrice(productCost + deliveryCost);
  }, [productCost, deliveryCost]);

  //handling options select in delivery
  const handleOptionSelect = (e) => {
    setDeliveryCost(parseInt(e.target.value, 10));
  };

  //function for checking promo code is valid, if true it gives 15% off the price BAD FUNCTION NEED TO UPGRADE!!!
  const checkPromoCode = (e) => {
    if (e.target.value === "PROMOCODE15") {
      setProductCost(prevProductCost => prevProductCost - (prevProductCost * 0.15))
    } else {
        setProductCost((prevProductCost) => prevProductCost);
    }
  };

  return (
    <div className="summary">
      <h1 className="summary__header">Summary</h1>
      <div className="summary__details">
        <p className="summary__details__item-quantity">Items: {items.length}</p>
        <p className="summary__details__total-price">Products Price: ${productCost}</p>
      </div>
      <div className="summary__delivery">
        <label className="summary__delivery__label" htmlFor="delivery">
          Delivery
        </label>
        <select className="summary__delivery__select" name="delviery options" id="delivery" onChange={handleOptionSelect}>
          <option value={13}>DPD - $13 est. time - 1day</option>
          <option value={12}>DHL - $12 est. time - 1/2day</option>
          <option value={8}>Post Office - $8 est. time - 5/7day</option>
          <option value={0}>Pigeon - FREE est. time - 30min</option>
        </select>
      </div>
      <div className="summary__promo">
        <label className="summary__promo__label" htmlFor="promo">
          PromoCode
        </label>
        <input className="summary__promo__input" type="text" placeholder="try PROMOCODE15 for 15% off!" onChange={checkPromoCode} />
      </div>
      <p className="summary__full-price">Total Price: ${totalPrice}</p>
      <ButtonUI className="checkout" tag="CHECKOUT" />
    </div>
  );
}

export default Summary;
