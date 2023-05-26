import "./style/GeneratorOutputStyle.scss";

function GeneratorOutput(props) {
  const selectedProduct = props.selectedProduct;
  const formData = props.formData;

  return (
    <div className="generator-output">
      <div className="generator-output__product">
        {selectedProduct && (
          <div className={`generator-output__product__shape--${selectedProduct.shape}`} style={{ backgroundColor: selectedProduct.color }}>
            <div className="header">
              <h1>Dear Bubuś</h1>
              <h2>It's your birthday</h2>
              {/* <h1> {formData.heading} </h1>
              <h2> {formData.caption} </h2> */}
            </div>
            <div className="content">
              {/* max 420!!! */}
              <p>
                On this day i hope you doing well! I want to wish you all the best and a hundred years! On this day i hope you doing well! I want to
                wish you all the best and a hundred years!On this day i hope you doing well! I want to wish you all the best and a hundred years! On
                this day i hope you doing well! I want to wiaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaash you all the best and a hundred years!
              </p>
              {/* <p> {formData.content} </p> */}
            </div>
            <div className="signature">
              <h3>Your dearest self</h3>
              <p>sebastian.kubanski@gmail.com</p>
              {/* <p> {formData.signature} </p>
                <p> {formData.contact} </p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneratorOutput;
