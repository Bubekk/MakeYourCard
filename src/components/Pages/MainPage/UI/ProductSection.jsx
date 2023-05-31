import { useContext } from "react";
import "../style/ProductSectionStyle.scss";
import ProductTile from "./ProductTile";
import { ProductsContext } from "../../../../Contexts/ProductsContext";
import { CartContext } from "../../../../Contexts/CartContext";

function ProductSection({ header }) {
  const productsData = useContext(ProductsContext);
  const occasionalCards = productsData.occasionalCards;
  const cartData = useContext(CartContext);
  const addToCart = cartData.addToCart;

  const productsOccasional = occasionalCards.map((product) => (
    <ProductTile key={product.id} 
    type={product.type} 
    name={product.name} 
    price={product.price} 
    imgSrc={product.imageSrc}
    product={product}
    addToCart={addToCart} />
  ));

  //rendering valid products category under valid header
  const renderProducts = () => {
    if (header === "Occasional Cards") {
      return productsOccasional;
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
