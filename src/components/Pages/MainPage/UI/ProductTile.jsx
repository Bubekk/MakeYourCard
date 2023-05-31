import "../style/ProductTileStyle.scss";

function ProductTile(props) {

  //returning img tag with valid src for every product dynamically
  function ProductImage(src) {
    const imagePath = `../../../../../images/product_images/${src}.png`;

    return <img src={imagePath} alt="Product" />;
  };

  //handling temp addToCart button
  const handleClick = () => {
    props.addToCart(props.product, 1);
  };

  return (
    <div className="product-tile">
      <div className="product-tile__image">{ProductImage(props.imgSrc)}</div>
      <div className="product-tile__tag">
        <p className="product-tile__tag__price">${props.price}</p>
        <button onClick={handleClick}>+</button>
      </div>
      <p className="product-tile__name"> {props.type} </p>
      <p className="product-tile__name"> {props.name} </p>
    </div>
  );
}

export default ProductTile;
