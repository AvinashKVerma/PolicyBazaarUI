import React, { useEffect, useRef } from "react";
import "./Slideshow2.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

const Slideshow2 = ({ images }) => {
  const slickRef = useRef(null);

  useEffect(() => {
    const currentRef = slickRef.current; // Store the current ref value in a local variable

    $(currentRef).on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        if (!slick.$dots) {
          return;
        }
        const i = (currentSlide ? currentSlide : 0) + 1;
        $(".pagingInfo").text(i + "/" + slick.$dots[0].children.length);
      }
    );

    $(currentRef).slick({
      slidesToShow: 3, // Display 3 photos at a time
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3, // Adjust the number of slides shown at the breakpoint if needed
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
    <div className="slideshow2">
      <div style={{ overflow: "hidden" }}>
        <div ref={slickRef}>
          {images.map((image, index) => (
            <div key={index}>
              <a href="/#">
                <img
                  src={image}
                  alt="Slideshow"
                  style={{ flexShrink: 0, marginRight: "16px" }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow2;
