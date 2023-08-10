import "./Section8.css";
import img from "../Resources/img23.avif";

function Section8() {
  return (
    <>
      <div className="copy-part">
        <p className="text-head">
          Get the <span>Policybazaar app</span>
        </p>
        <p className="line">
          <span></span>
        </p>
        <p className="control">
          Get control of all your insurance needs anywhere, anytime{" "}
        </p>
        <ul className="list" style={{ listStyle: "none" }}>
          <li>Compare different insurance policies</li>
          <li>Buy, store and share all your policies online</li>
          <li>Track your policy status on the go</li>
          <li>Download your policy with a single tap</li>
        </ul>
        <span className="text">Download our app from</span>
        <a href="/#" className="play-store googleplay download-app1">
          <img alt="" />
        </a>
        <a href="/#" className="play-store ios install-now">
          <img alt="" />
        </a>
      </div>
      <div className="mobile">
        <img src={img} className="lazy app store" alt="app" />
        <a href="/#" className="install-now">
          GET THE APP NOW
        </a>
      </div>
    </>
  );
}

export default Section8;
