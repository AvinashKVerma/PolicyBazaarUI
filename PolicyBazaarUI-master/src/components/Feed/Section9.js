import React, { Component } from "react";
import Slider from "react-slick";
import "./Section9.css";
import "swiper/css";
import "swiper/css/pagination";

export default class Section9 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true,
        //   },
        // },
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
    const testimonials = [
      {
        customer: "Urvashi Solanki",
        copy: "I did not even need help from an agent! This is very good!",
      },
      {
        customer: "Ananth Narayan",
        copy: "Thank you for facilitating and following up on the policy. Its been a very pleasurable experience with you folks at Policybazaar.",
      },
      {
        customer: "Bhaaskar Lokhande",
        copy: "Thanks for correction done in time and really Appreciated....!! GOOD TO HAVE POLICYBAZAAR..!! LIFE IS EASY WITH YOU..!!",
      },
      {
        customer: "Neha Jain",
        copy: "You are doing a great job. Proud to be a customer of Policybazaar.",
      },
      {
        customer: "Prabhat Yadav",
        copy: "Thanking you very much for your support for getting our policy quickly, I would appreciate your work.",
      },
      {
        customer: "Rashmi Sirsath",
        copy: "I would like to thank the website 'www.policybazaar.com' because of which i could get a good policy.",
      },
      {
        customer: "Parag Lele",
        copy: "The services provided by Policybazaar are extremely helpful in making the right choice. Overall I had a good experience with Policybazaar.",
      },
      {
        customer: "Shraddha Sharma",
        copy: "Very simple to use, friendly website",
      },
      {
        customer: "Sonia Khanna",
        copy: "Got good deal without agent calling or speaking to anyone!!",
      },
    ];

    const arr = testimonials.map((ele, index) => {
      return (
        <div key={index} className="block slick-current slick-active">
          <div key={index} className="data">
            <p className="customer">{ele.customer}</p>
            <p className="copy">{ele.copy}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="h2">
          What Our Customers
          <br />
          Are Saying<span></span>
        </div>
        <div className="row">
          <div className="testimonial-new slick-initialized slick-slider">
            <Slider {...settings}>
              {arr.map((ele, index) => {
                return <div key={index}> {ele}</div>;
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
