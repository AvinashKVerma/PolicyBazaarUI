import "./Section4.css";
import Slideshow1 from "./Slideshow1";
// import "./Section1.css";

function Section4() {
  const images = [
    {
      img: (
        <a href="/#" style={{ textDecoration: "none" }}>
          <article className="investment-plans prd-bg">
            <div className="block-data">
              <div className="left-container">
                <span className="float-icon investment-plan"></span>
                <span className="icon icon-bg investment-plans"></span>
                <p className="head">Investment Plans</p>
                <div>
                  <p className="copy">
                    Invest ₹10K and Get <br />
                    <span className="large-text">₹1 Crore</span> return*
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      ),
    },
    {
      img: (
        <a href="/#" style={{ textDecoration: "none" }}>
          <article className="health-insurance prd-bg">
            <div className="block-data">
              <div className="left-container">
                <span className="float-icon health-insurance"></span>
                <span className="icon icon-bg"></span>
                <p className="head">Health Insurance</p>
                <div>
                  <p className="copy invfundData">
                    Protect yourself & <br />
                    your family against <br />
                    <span>Covid-19</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      ),
    },
    {
      img: (
        <a href="/#" style={{ textDecoration: "none" }}>
          <article className="home-insurance prd-bg">
            <div className="block-data">
              <div className="left-container">
                <span className="float-icon home-insurance"></span>
                <span className="icon icon-bg"></span>
                <p className="head">Home Insurance</p>
                <div>
                  <p className="copy invfundData">
                    <span>₹50 Lakh Cover</span> for Your <br />
                    Home Insurance starting <br />
                    at Just
                    <span> ₹80/month*</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      ),
    },
    {
      img: (
        <a href="/#" style={{ textDecoration: "none" }}>
          <article className="pbaskci prd-bg onestop">
            <div className="block-data">
              <div className="left-container"></div>
            </div>
          </article>
        </a>
      ),
    },
    {
      img: (
        <a href="/#" style={{ textDecoration: "none" }}>
          <article className="pbaskci prd-bg">
            <div className="block-data">
              <div className="left-container">
                <span className="float-icon askpb-insurance"></span>
                <span className="icon icon-bg pbaskci"></span>
                <p className="head">AskPB</p>
                <div>
                  <p className="copy">
                    Got a
                    <span>
                      question
                      <br />
                      about insurance?
                    </span>
                    <br />
                    Write to us
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="slick-list draggable">
        <div className="slick-track">
          <article>
            <div className="top-pic1 open">
              <div className="ext-banner1">
                <div className="tax-slider-wrap1 full_img1">
                  <div className="tax-slider1 slick-initialized slick-slider">
                    <div className="slick-list draggable" aria-live="polite">
                      <div className="slick-track">
                        <Slideshow1 images={images} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Section4;
