import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../assets/image/slider1.png";
import Slider2 from "../assets/image/slider2.png";
import Slider3 from "../assets/image/slider3.png";
import Slider4 from "../assets/image/slider4.png";
import Slider5 from "../assets/image/slider5.png";
import Slider6 from "../assets/image/slider6.png";
import Slider7 from "../assets/image/slider7.png";
import Slider8 from "../assets/image/slider8.png";
import Slider9 from "../assets/image/slider9.png";
import Slider10 from "../assets/image/slider10.png";
import Slider11 from "../assets/image/slider11.png";
import Slider12 from "../assets/image/slider12.png";
import Slider13 from "../assets/image/slider13.png";
import Slider from "react-slick";
const Rare = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg_black py-5 mt-minus">
        <div className="container position-relative">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h5 className="main_heading">
              RARE <span className="d-block">METABILLIONAIRES</span>
            </h5>
          </div>
          <Slider
            {...settings}
            ref={slider}
            className="rare-slider position-relative mt-5 pt-sm-5"
          >
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider1}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider2}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider3}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider4}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider5}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider6}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider7}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider8}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider9}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider10}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 px-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider11}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 px-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider12}
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 px-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src={Slider13}
                alt="Rare1"
              />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Rare;
