import "./Section6.css";
import "./Section1.css";
// import Slideshow2 from "./Slideshow2";
import Carousel from "./Carousel";
import img1 from "../Resources/img19.avif";
import img2 from "../Resources/img20.avif";
import img3 from "../Resources/img16.avif";
import img4 from "../Resources/img19.avif";
import img5 from "../Resources/img17.avif";
import img6 from "../Resources/img18.avif";

function Section6() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="responsive slick-initialized slick-slider">
      <div className="slick-list draggable">
        <div className="slick-track">
          <article>
            <div className="top-pic open">
              <div className="ext-banner">
                <div className="tax-slider-wrap1 full_img">
                  <div className="tax-slider1 slick-initialized slick-slider">
                    <div className="slick-list draggable" aria-live="polite">
                      <div className="slick-track">
                        {" "}
                        <Carousel images={images} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
export default Section6;
