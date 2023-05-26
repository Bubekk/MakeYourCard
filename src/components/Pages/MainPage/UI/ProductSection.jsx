import { useContext } from "react";
import "../style/ProductSectionStyle.scss";
import ProductTile from "./ProductTile";
import { ProductsContext } from "../../../../Contexts/ProductsContext";

function ProductSection({ header }) {
  const ProductsData = useContext(ProductsContext);
  const OccasionalCards = ProductsData.occasionalCards;

  const ProductsOccasional = OccasionalCards.map((product) => (
    <ProductTile key={product.id} 
    type={product.type} 
    name={product.name} 
    price={product.price} 
    imgSrc={product.imageSrc} />
  ));

  const renderProducts = () => {
    if (header === "Occasional Cards") {
      return ProductsOccasional;
    }
  };

  return (
    <div className="product-section">
      <div className="product-section__header">
        <h1 className="product-section__header__text">{header}</h1>
      </div>
      <div className="product-section__product-container">{renderProducts()}</div>
    </div>
  );
}

export default ProductSection;
