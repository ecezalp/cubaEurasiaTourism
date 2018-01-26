import React from 'react';
import Slider from 'react-slick';

export default function Carousel({slides}) {

  let settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (<Slider {...settings}>
      {slides}
    </Slider>
  );
}