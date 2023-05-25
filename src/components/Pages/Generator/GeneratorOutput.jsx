import "./style/GeneratorOutputStyle.scss";

function GeneratorOutput(props) {

  const selectedProduct = props.selectedProduct;
  const formData = props.formData;

  return (
    <div className="generator-output">
      <div className="generator-output__product">
        {selectedProduct && (
          <div
            className={`generator-output__product__shape--${selectedProduct.shape}`}
            style={{backgroundColor: selectedProduct.color}}
          >
            <div className="header">
              <h1> {formData.name} </h1>
              <h2> {formData.company} </h2>
            </div>
            <div className="contact">
              <p> {formData.contact} </p>
              <p> {formData.email} </p>
              <p> {formData.address} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneratorOutput;
