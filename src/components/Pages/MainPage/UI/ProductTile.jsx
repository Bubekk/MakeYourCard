import "../style/ProductTileStyle.scss"

function ProductTile(props) {

    function ProductImage( src ) {
        const imagePath = `../../../../../public/images/product_images/${src}.png`;
      
        return <img src={imagePath} alt="Product" />;
      }

    return (
        <div className="product-tile">
                <div className="product-tile__image">
                    {ProductImage(props.imgSrc)}
                </div>
                <div className="product-tile__tag">
                    <p className="product-tile__tag__price">{props.price}</p>
                </div>
                <p className="product-tile__name"> {props.type} </p>
                <p className="product-tile__name"> {props.name} </p>
        </div>
    )
}

export default ProductTile;