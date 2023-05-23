import "./style/GeneratorInputStyle.scss";
import ButtonUI from "../../UI/ButtonUI";

function GeneratorInput() {
    return (
        <div className="generator-input">
            <h1 className="generator-input__header">Make your card</h1>
            <div className="generator-input__form">
                <form className="generator-input__form--inputs" action="submit">
                    <label className="generator-input__form--inputs__label" htmlFor="company">Company name</label>
                    <input type="text" className="generator-input__form--inputs__input" id="company" />
                    <label className="generator-input__form--inputs__label" htmlFor="name">Name and surname</label>
                    <input type="text" className="generator-input__form--inputs__input" id="name" />
                    <label className="generator-input__form--inputs__label" htmlFor="contact">Phone number</label>
                    <input type="text" className="generator-input__form--inputs__input" id="contact" />
                    <label className="generator-input__form--inputs__label" htmlFor="email">Email address</label>
                    <input type="text" className="generator-input__form--inputs__input" id="email" />
                    <label className="generator-input__form--inputs__label" htmlFor="address">Company Address</label>
                    <input type="text" className="generator-input__form--inputs__input" id="address" />
                    <ButtonUI className="generator-input" tag="SUBMIT" />
                </form>
            </div>
        </div>
    )
}

export default GeneratorInput;