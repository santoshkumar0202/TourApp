import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import  { useEffect, useState } from "react";

import list from "../../public/list.json";
function PopolarDests() {
  const filterData = list.filter((data) => data.category === "offer");

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
      <div className="max-w-screen-2xl container mx-auto md:px-28 px-4">
        <h1 className="font-semibold text-xl pb-2 ">Drem Dests</h1>
        <p>
          Explore a world of wonders with our curated destinations! Whether
          you're dreaming of serene beaches, vibrant cityscapes, or breathtaking
          mountain retreats, we have something for every traveler. Scroll
          through our top picks and let your next adventure come to life. Your
          perfect getaway is just a click away!
        </p>
      </div>
      <div>
        <Slider {...settings}>
        {filterData.map((item) => (
    <Cards item={item} key={item.id} />
))}
        </Slider>
      </div>
    </>
  );
}

export default PopolarDests;
