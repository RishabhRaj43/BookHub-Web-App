import React from "react";
import list from "../../public/list";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4`}>
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books</h1>
        </div>

        <div className="slider-container mt-3">
          <Slider {...settings}>
            {filterData.map((data, ind) => {
              return (
                <div key={ind} className="px-2">
                <Cards data={data} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
