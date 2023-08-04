import React, { Component } from "react";
import "./Section6.css";
import Slider from "react-slick";
import img1 from "../Resources/img19.avif";
import img2 from "../Resources/img20.avif";
import img3 from "../Resources/img16.avif";
import img4 from "../Resources/img19.avif";
import img5 from "../Resources/img17.avif";
import img6 from "../Resources/img18.avif";

export default class Section6 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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
    const images = [img1, img2, img3, img4, img5, img6];
    return (
      <div>
        <Slider {...settings}>
          {images.map((ele, index) => {
            return (
              <div className="card" key={index}>
                <img src={ele} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
