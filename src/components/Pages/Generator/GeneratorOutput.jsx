import "./style/GeneratorOutputStyle.scss";
import Occasional1 from "./Products/Occasional1";
import Occasional2 from "./Products/Occasional2";
import Occasional3 from "./Products/Occasional3";
import { useState, useEffect } from "react";

function GeneratorOutput(props) {
  const selectedProduct = props.selectedProduct;
  const formData = props.formData;
  const [selectedComponent, setSelectedComponent] = useState(<Occasional1 selectedProduct={selectedProduct} formData={formData} />);
  
  //rendering valid product layout on page depending on selected product in GeneratorInput
  useEffect(() => {
    switch (selectedProduct?.id) {
      case "o1":
        setSelectedComponent(
          <Occasional1 selectedProduct={selectedProduct} formData={formData} />
        );
        break;
      case "o2":
        setSelectedComponent(
          <Occasional2 selectedProduct={selectedProduct} formData={formData} />
        );
        break;
      case "o3":
        setSelectedComponent(
          <Occasional3 selectedProduct={selectedProduct} formData={formData} />
        );
        break;
      default:
        setSelectedComponent(<Occasional1 selectedProduct={selectedProduct} formData={formData} />);
    }
  }, [selectedProduct, formData]);

  return (
    <div className="generator-output">
      <div className="generator-output__product">
        { selectedComponent }
        
        {/* Old code for rendering product, but trying to refractor it to more readable code */}
        {/* {selectedProduct && (
          <div className={`generator-output__product__shape--${selectedProduct.shape}`} style={{ backgroundColor: selectedProduct.color }}>
            <div className="header">
              <h1>Dear Bubuś</h1>
              <h2>It's your birthday</h2>
              <h1> {formData.heading} </h1>
              <h2> {formData.caption} </h2>
            </div>
            <div className="content">
              max 420!!!
              <p>
                On this day i hope you doing well! I want to wish you all the best and a hundred years! On this day i hope you doing well! I want to
                wish you all the best and a hundred years!On this day i hope you doing well! I want to wish you all the best and a hundred years! On
                this day i hope you doing well! I want to wiaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaash you all the best and a hundred years!
              </p>
              <p> {formData.content} </p>
            </div>
            <div className="signature">
              <h3>Your dearest self</h3>
              <p>sebastian.kubanski@gmail.com</p>
              <p> {formData.signature} </p>
                <p> {formData.contact} </p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default GeneratorOutput;
