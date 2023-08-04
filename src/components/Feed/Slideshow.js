import React, { useEffect, useRef } from "react";
import "./Slideshow.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

const Slideshow = ({ images }) => {
  const slickRef = useRef(null);

  useEffect(() => {
    const currentRef = slickRef.current;

    $(currentRef).on("init reInit afterChange", function (slick, currentSlide) {
      if (!slick.$dots) {
        return;
      }
      const i = (currentSlide ? currentSlide : 0) + 1;
      $(".pagingInfo").text(i + "/" + slick.$dots[0].children.length);
    });

    $(currentRef).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
            dots: true,
          },
        },
      ],
    });

    return () => {
      $(currentRef).slick("unslick");
    };
  }, []);

  return (
    <div className="slideshow">
      <div style={{ overflow: "hidden" }}>
        <div ref={slickRef}>
          {images.map((image, index) => (
            <div key={index}>
              <a href="/#">
                {" "}
                <img
                  className="banner"
                  src={image}
                  alt="Slideshow"
                  style={{ flexShrink: 0 }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
