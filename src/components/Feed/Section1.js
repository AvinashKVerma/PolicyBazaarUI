import React from "react";
import "./Section1.css";
import Slideshow from "./Slideshow";
import img1 from "../Resources/img1.avif";
import img2 from "../Resources/img2.avif";
import img3 from "../Resources/33.avif";

function Section1() {
  const images = [img1, img2, img3];
  return (
    <>
      <section className="top-fold">
        <article className="txt-part mobilehide">
          <h1>
            Let's find you
            <br />
            the
            <span> Best Insurance</span>
          </h1>
          <div className="usp">
            <span className="lowest-price">
              <i className="icon-bg"></i>
              50+ insurers with one
              <br className="hide-small" />
              of the best prices
            </span>
            <span className="hassle-free">
              <i className="icon-bg"></i>
              Quick, easy &
              <br />
              hassle free
            </span>
          </div>
        </article>
        <article style={{ height: "auto" }}>
          <div className="tax-slider-wrap full_img">
            <div className="tax-slider slick-initialized slick-slider">
              <div className="slick-list draggable" aria-live="polite">
                <div className="slick-track">
                  <Slideshow images={images} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
export default Section1;
