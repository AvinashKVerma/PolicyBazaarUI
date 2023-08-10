import React, { Component } from "react";
import Slider from "react-slick";
import Investment from "./InvesterData";
import "./Carousel.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1490,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Slider {...settings}>
          {Investment.map((ele, index) => {
            return (
              <div className="card" key={index}>
                <div className="inv">
                  <span
                    style={{ backgroundPosition: `${ele.pos}` }}
                    alt=""
                    className={ele.class}
                  ></span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
