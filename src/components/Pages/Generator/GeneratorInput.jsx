import "./style/GeneratorInputStyle.scss";
import ButtonUI from "../../UI/ButtonUI";

function GeneratorInput(props) {
  const { occasional } = props.productsOptions;

  const handleProductChange = (e) => {
    const productId = e.target.value;
    const selectedProduct = [...occasional].find((product) => product.id === productId);
    props.onProductChange(selectedProduct);
  };

  //rendering options in select tag
  const productOptions = [...occasional].map((product) => (
    <option key={product.id} value={product.id}>
      {product.type} {product.name}
    </option>
  ));

  return (
    <div className="generator-input">
      <h1 className="generator-input__header">Make your card</h1>
      <div className="generator-input__form">
        <form className="generator-input__form--inputs" action="submit">
          <label className="generator-input__form--inputs__label" htmlFor="Heading">
            Heading
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="heading"
            name="heading"
            value={props.formData.heading}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="caption">
            caption
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="caption"
            name="caption"
            value={props.formData.caption}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="content">
            content
          </label>
          {/* Change to textarea! */}
          <input
            type="textarea"
            className="generator-input__form--inputs__input"
            id="content"
            name="content"
            value={props.formData.content}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="signature">
            signature
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="signature"
            name="signature"
            value={props.formData.signature}
            onChange={props.onFormChange}
          />
          <label className="generator-input__form--inputs__label" htmlFor="contact">
            contact
          </label>
          <input
            type="text"
            className="generator-input__form--inputs__input"
            id="contact"
            name="contact"
            value={props.formData.contact}
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
