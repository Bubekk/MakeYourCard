import "./style/SummaryStyle.scss";
import ButtonUI from "../../UI/ButtonUI";

function Summary() {
    return (
        <div className="summary">
            <h1 className="summary__header">Summary</h1>
            <div className="summary__details">
                <p className="summary__details__item-quantity">Items: 3</p>
                <p className="summary__details__total-price">Total Price: $90</p>
            </div>
            <div className="summary__delivery">
                <label className="summary__delivery__label" htmlFor="delivery">Delivery</label>
                <select className="summary__delivery__select" name="delviery options" id="delivery">
                    <option value="DPD">DPD - $13 est. time - 1day</option>
                    <option value="DHL">DHL - $12 est. time - 1/2day</option>
                    <option value="PostOffice">Post Office - $8 est. time - 5/7day</option>
                    <option value="Pigeon">Pigeon - FREE est. time - 30min</option>
                </select>
            </div>
            <div className="summary__promo">
                <label className="summary__promo__label" htmlFor="promo">PromoCode</label>
                <input className="summary__promo__input" type="text" placeholder="ex. GLA514" />
                <ButtonUI className="promo" tag="Apply Code" />
            </div>
                <p className="summary__full-price">Total Price: $90 + delivery</p>
            <ButtonUI className="checkout" tag="CHECKOUT" />
        </div>
    )
}

export default Summary;