import "../style/ProductSectionStyle.scss";

function ProductSection({header}) {
    return(
        <div className="product-section">
            <div className="product-section__header">
                <h1 className="product-section__header__text">{header}</h1>
            </div>
            <div className="product-section__product-container">
                <p>temp product</p>
                <p>temp product</p>
                <p>temp product</p>
                <p>temp product</p>
                <p>temp product</p>
                <p>temp product</p>
            </div>
        </div>
    )
}

export default ProductSection;