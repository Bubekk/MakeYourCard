import "./style/GeneratorInputStyle.scss";
import ButtonUI from "../../UI/ButtonUI";

function GeneratorInput(props) {
  const { bussines, occasional } = props.productsOptions;

  const handleProductChange = (e) => {
    const productId = e.target.value;
    const selectedProduct = [...bussines, ...occasional].find((product) => product.id === productId);
    props.onProductChange(selectedProduct);
  };

  const productOptions = [...bussines, ...occasional].map((product) => (
    <option key={product.id} value={product.id}>
      {product.type === "Bussines Card" ? "B" : "O"} {product.name}
    </option>
  ));

  return (
    <div className="generator-input">
      <h1 className="generator-input__header">Make your card</h1>
      <div className="generator-input__form">
        <form className="generator-input__form--inputs" action="submit">
          <label className="generator-input__form--inputs__label" htmlFor="company">
            Company name
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="company"
            name="company"
            value={props.formData.company}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="name">
            Name and surname
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="name"
            name="name"
            value={props.formData.name}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="contact">
            Phone number
          </label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Format: 123-456-7890"
            className="generator-input__form--inputs__input"
            id="contact"
            name="contact"
            value={props.formData.contact}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="email">
            Email address
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="email"
            name="email"
            value={props.formData.email}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="address">
            Company Address
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="address"
            name="address"
            value={props.formData.address}
            onChange={props.onFormChange}
          />
          <ButtonUI className="generator-input" tag="SUBMIT" />
        </form>
        <select name="products" onChange={handleProductChange}>
          {productOptions}
        </select>
      </div>
    </div>
  );
}

export default GeneratorInput;
