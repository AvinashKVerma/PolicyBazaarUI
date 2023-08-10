import "./Section5.css";
function Section5() {
  return (
    <div className="left-block">
      <div className="txt-block opacity-1">
        What makes
        <br />
        <span>Policybazaar</span> one of
        <br />
        <span>India's favourite places</span>
        <br />
        to<span> buy insurance</span>?
      </div>
      <div className="right-block top-0">
        <div className="info-box ">
          <span className="top-icon"></span>
          <p className="head">Over 9 million</p>
          <p className="copy">
            customers trust us & have bought their insurance on Policybazaar
          </p>
        </div>
        <div className="info-box insurer">
          <span className="top-icon"></span>
          <p className="head">50+ insurers</p>
          <p className="copy">
            partnered with us so that you can compare easily & transparently
          </p>
        </div>
        <div className="info-box lowest-price">
          <span className="top-icon"></span>
          <p className="head">Great Price</p>
          <p className="copy">
            for all kinds of insurance plans available online
          </p>
        </div>
        <div className="info-box claims">
          <span className="top-icon"></span>
          <p className="head">Claims</p>
          <p className="copy">
            support built in with every policy for help, when you need it the
            most
          </p>
        </div>
      </div>
    </div>
  );
}
export default Section5;
