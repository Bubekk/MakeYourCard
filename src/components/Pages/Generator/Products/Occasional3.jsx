function Occasional3(props) {
  const selectedProduct = props.selectedProduct;
  const formData = props.formData;

  return (
    <div className={`generator-output__product__shape--${selectedProduct.shape}`}>
      <div className="header">
        <h1 style={{ display: formData.heading ? "none" : "" }}>Ambassador,</h1>
        <h1 style={{ display: formData.heading ? "" : "none" }}> {formData.heading} </h1>
        <h2 style={{ display: formData.caption ? "none" : "" }}>We would invite you for our anniversary</h2>
        <h2 style={{ display: formData.caption ? "" : "none" }}> {formData.caption} </h2>
      </div>
      <div className="content">
        {/* max 420 signs!!! */}
        <p style={{ display: formData.content ? "none" : "" }}>
          We would like to extend a warm invitation to you to become a valued ambassador for our brand. Your passion and influence make you an ideal
          fit for our community. As an ambassador, you will have the opportunity to represent our brand, share your experiences, and help us create a
          lasting impact. Your support will play a vital role in spreading the word about our products and values.
        </p>
        <p style={{ display: formData.content ? "" : "none" }}> {formData.content} </p>
      </div>
      <div className="signature">
        <h3 style={{ display: formData.signature ? "none" : "" }}>Warm regards,</h3>
        <h3 style={{ display: formData.signature ? "" : "none" }}> {formData.signature} </h3>
        <p style={{ display: formData.contact ? "none" : "" }}>Signature</p>
        <p style={{ display: formData.contact ? "" : "none" }}> {formData.contact} </p>
      </div>
    </div>
  );
}

export default Occasional3;
