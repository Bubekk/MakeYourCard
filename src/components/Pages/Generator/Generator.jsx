import "./style/GeneratorStyle.scss";
import { useContext, useState } from "react";
import GeneratorInput from "./GeneratorInput";
import GeneratorOutput from "./GeneratorOutput";
import { ProductsContext } from "../../../Contexts/ProductsContext";

function Generator() {
  const ProductsData = useContext(ProductsContext);
  const products = {
    occasional: ProductsData.occasionalCards,
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  //changing product options in input for outputing valid product layout
  const handleProductChange = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };

  //form values
  const [formData, setFormData] = useState({
    heading: "",
    caption: "",
    content: "",
    signature: "",
    contact: "",
  })

  //form handling
  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="generator">
      <div className="generator__input">
        <GeneratorInput productsOptions={products} onProductChange={handleProductChange} formData={formData} onFormChange={handleForm} />
      </div>
      <div className="generator__output">
        <GeneratorOutput selectedProduct={selectedProduct} formData={formData} />
      </div>
    </div>
  );
}

export default Generator;
