import "./Section2.css";
import React, { useState } from "react";
import img5 from "../Resources/img5.avif";
import img6 from "../Resources/img6.svg";

function Section2(props) {
  const { func } = props;
  const [li, setLi] = useState(false);
  const item = [
    { i: "term-life", p: "Term Life", pos: "-.1%", link: true },
    {
      i: "health-insurance",
      span: true,
      p: "Health",
      pos: "3.5%",
    },
    { i: "investment", p: "Investment Plans", pos: "7%" },
    { i: "car-insurance", p: "Car", pos: "10.6%" },
    { i: "two-wheeler-insurance", p: "2 Wheeler", pos: "14.2%" },
    {
      i: "family-health-insurance",
      span: true,
      p: "Family Health",
      pos: "17.7%",
    },
    { i: "icon-bg-new ti", p: "Travel", pos: "21.5%", last: true },
  ];
  const itme1 = [
    {
      i: "guaranteed-return-plan",
      p: "Guaranteed Return Plans",
      pos: "28.5%",
      mob: false,
    },
    { i: "csip", p: "Child Savings Plans", pos: "32.1%", mob: false },
    { i: "retirement-plan", p: "Retirement Plans", pos: "35.6%", mob: false },
    { i: "ghi", p: "Group Health Insurance", pos: "39.2%", mob: true },
    {
      i: "home-insurance",
      p: "Home Insurance",
      pos: "82.1%",
      mob: true,
      last: true,
    },
  ];
  const handleClick = () => {
    func(!li);
  };

  return (
    <section className="prd-row">
      {item.map((ele, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`prd-block ${ele.last ? "tra" : ""}`}>
              <a href={"/#"}>
                <div
                  onClick={handleClick}
                  className="prd-icon add shadowHandler short"
                >
                  <div className="shadowHandlerBox">
                    <i
                      className={`icon-bg homeIconsBg ${ele.i}`}
                      style={{ backgroundPosition: `0% ${ele.pos}` }}
                    ></i>
                    {ele.span && (
                      <span className="hi-light">Upto 25% Discount</span>
                    )}
                  </div>
                  <p>{`${ele.p} Insurance`}</p>
                </div>
              </a>
            </div>
          </React.Fragment>
        );
      })}

      <div className="prd-block mrtop20">
        <a href="/#">
          <div className="prd-icon add shadowHandler short">
            <div className="shadowHandlerBox">
              <i className="icon-bg homeIconsBg icon-bg-new none newterm_icon women_term">
                <img src={img5} alt="Women Term Insurance"></img>
              </i>
            </div>
            <p>Term Insurance (Women)</p>
          </div>
        </a>
      </div>
      <div className="prd-block mrtop20 mobile">
        <a href="/#">
          <div className="prd-icon add shadowHandler short">
            <div className="shadowHandlerBox">
              <i className="icon-bg homeIconsBg icon-bg-new none newterm_icon">
                <img src={img6} alt="Diabetic"></img>
              </i>
            </div>
            <p>Term Insurance for Diabetic</p>
          </div>
        </a>
      </div>
      {itme1.map((ele, index) => {
        return (
          <div
            className={`prd-block mrtop20 mobile ${ele.mob ? "mobile" : ""} ${
              ele.last && "last"
            }`}
            key={index}
          >
            <a href="/#">
              <div className="prd-icon add shadowHandler short">
                <div className="shadowHandlerBox">
                  <i
                    className={`icon-bg homeIconsBg icon-bg-new ${ele.i}`}
                    style={{ backgroundPosition: `0% ${ele.pos}` }}
                  ></i>
                </div>
                <p>{ele.p}</p>
              </div>
            </a>
          </div>
        );
      })}

      <div className="view-all-products ">
        <a className="view-all view-all-prd" href="/#">
          View all products
        </a>
      </div>
      <div className="mob-btn">
        <a href="/#" className="left-btn renewapolicymob">
          <i className="icon-bg"></i>
          Renew a Policy
        </a>
        <a href="/#" className="left-btn right-btn">
          <i className="icon-bg claim"></i>
          File a Claim
        </a>
      </div>
    </section>
  );
}
export default Section2;
