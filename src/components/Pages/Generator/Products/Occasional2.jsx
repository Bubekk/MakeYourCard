function Occasional2(props) {
  const selectedProduct = props.selectedProduct;
  const formData = props.formData;

  return (
    <div className={`generator-output__product__shape--${selectedProduct.shape}`}>
      <div className="header">
        <h1 style={{ display: formData.heading ? "none" : "" }}>Dear Customer,</h1>
        <h1 style={{ display: formData.heading ? "" : "none" }}> {formData.heading} </h1>
        <h2 style={{ display: formData.caption ? "none" : "" }}>Thank you very much</h2>
        <h2 style={{ display: formData.caption ? "" : "none" }}> {formData.caption} </h2>
      </div>
      <div className="content">
        {/* max 420 signs!!! */}
        <p style={{ display: formData.content ? "none" : "" }}>
          Thank you for your extraordinary order and for the trust you have placed in our company. It is a great pleasure for us to serve such
          wonderful customers like you. Your support and commitment are invaluable to our business. Thanks to you, we can continue to create
          high-quality products and deliver unforgettable experiences.
        </p>
        <p style={{ display: formData.content ? "" : "none" }}> {formData.content} </p>
      </div>
      <div className="signature">
        <h3 style={{ display: formData.signature ? "none" : "" }}>With sincere regards,</h3>
        <h3 style={{ display: formData.signature ? "" : "none" }}> {formData.signature} </h3>
        <p style={{ display: formData.contact ? "none" : "" }}>Your name or company name</p>
        <p style={{ display: formData.contact ? "" : "none" }}> {formData.contact} </p>
      </div>
    </div>
  );
}

export default Occasional2;
