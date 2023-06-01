function Occasional1(props) {
  const selectedProduct = props.selectedProduct || { shape: "occasional1"};
  const formData = props.formData;

  return (
    <div className={`generator-output__product__shape--${selectedProduct.shape}`}>
      <div className="header">
        <h1 style={{ display: formData.heading ? "none" : "" }}>Dear Name</h1>
        <h1 style={{ display: formData.heading ? "" : "none" }}> {formData.heading} </h1>
        <h2 style={{ display: formData.caption ? "none" : "" }}>It's your birthday</h2>  
        <h2 style={{ display: formData.caption ? "" : "none" }}> {formData.caption} </h2>
      </div>
      <div className="content">
        {/* max 420 signs!!! */}
        <p style={{ display: formData.content ? "none" : "" }}>
          On this day i hope you doing well! I want to wish you all the best and a hundred years! On this day i hope you doing well! I want to wish
          you all the best and a hundred years!On this day i hope you doing well! I want to wish you all the best and a hundred years! On this day i
          hope you doing well! I want to wish you all the best and a hundred years!
        </p>
        <p style={{ display: formData.content ? "" : "none" }}> {formData.content} </p>
      </div>
      <div className="signature">
        <h3 style={{ display: formData.signature ? "none" : "" }}>Your dearest</h3>
        <p style={{ display: formData.signature ? "" : "none" }}> {formData.signature} </p>
        <p style={{ display: formData.contact ? "none" : "" }}>Your signature</p>
        <p style={{ display: formData.contact ? "" : "none" }}> {formData.contact} </p>
      </div>
    </div>
  );
}

export default Occasional1;
