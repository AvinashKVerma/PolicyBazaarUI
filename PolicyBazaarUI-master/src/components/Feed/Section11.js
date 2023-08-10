import "./Section11.css";
import Slider from "react-slick";
import Investment from "./InvesterData";

function Section11() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2500,
    autoplaySpeed: 2495,
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
    <>
      <div className="home-inv">
        <div
          style={{
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1>Investors</h1>
          <div className="home-hl"></div>

          <br />
          <br />

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
      </div>
    </>
  );
}
export default Section11;
