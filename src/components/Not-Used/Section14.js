import "./Section14.css";
import Investment from "../Feed/InvesterData";
import React, { Component } from "react";
import Slider from "react-slick";

// function Section14 (){
//     const arr = Investment.map((ele) => {
//         return (
//
//         )
//     })
//     return(
//         <>
//         </>
//     )
// }

// export default Section14;

export default class Section14 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    const arr = Investment.map((ele) => {
      return (
        <span
          className={ele.class}
          style={{ backgroundPosition: ele.pos }}
        ></span>
      );
    });
    return (
      <div>
        <h2>Auto Play</h2>
        {Investment.map((ele) => {
          return (
            <Slider {...settings}>
              <span
                className={ele.class}
                style={{ backgroundPosition: ele.pos }}
              ></span>
            </Slider>
          );
        })}
      </div>
    );
  }
}
