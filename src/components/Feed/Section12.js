import "./Section12.css";
import img from "../Resources/img29.avif";

function Section12() {
  return (
    <>
      <div className="heading">
        <div className="h2">
          Have a question?
          <br />
          Here to help.
          <span></span>
        </div>
      </div>
      <div className="help-pic">
        <img src={img} alt="help-pic" />
      </div>
      <div className="help-text">
        <p>
          Our friendly customer support team is your extended family. Speak your
          heart out. They listen with undivided attention to resolve your
          concerns. Give us a call, request a callback or drop us an email,
          we’re here to help.
        </p>
        <a className="btn" href="/#">
          <i></i>
          <span>General Enquiries</span>
          <span>care@policybazaar.com</span>
        </a>
        <a className="btn no-margin" href="/#">
          <i className="support"></i>
          <span>Customer Sales Enquiries</span>
          <span>1800 - 208 - 8787</span>
        </a>
      </div>
    </>
  );
}
export default Section12;
