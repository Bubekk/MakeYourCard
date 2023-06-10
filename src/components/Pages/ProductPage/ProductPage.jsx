import "./style/ProductPageStyle.scss";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../../Contexts/CartContext";
import { ProductsContext } from "../../../Contexts/ProductsContext";
import ButtonUI from "../../UI/ButtonUI";

function ProductPage() {
    
    const products = useContext(ProductsContext);
    const cart = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(0);
    const image = "../../../../public/images/product_background/"

    useEffect(() => {
        const foundProduct = products.occasionalCards.find(
          (card) => card.id === id
        );
        setProduct(foundProduct);
      }, [id, products.occasionalCards]);

  //handling temp addToCart button
  const handleClickAddToCart = () => {
    if (product) {
      cart.addToCart(product, 1, "default");
    }
  };

  return (
    <div className="product-page">
      <div className="product-page__image">
        <img src={`/images/product_background/${product && product.background}.png`} alt="product image" />
      </div>
      <div className="product-page__description">
        <h1>{product && product.name}</h1>
        <p className="product-page__description__text">{product && product.description}</p>
        <div className="product-page__description__buttons">
          <Link to={"/generator"}>
            <ButtonUI tag={"Generator"} className={"product-page"} />
          </Link>
          <ButtonUI tag={"Add to Cart"} className={"product-page"} onClick={handleClickAddToCart} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
