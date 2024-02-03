import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shop from "../img/newA4.jpg"
import photo2 from "../img/newA2.jpg"
import photo3 from "../img/newA3.jpg"

function CarouselWithTwoItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className='c'>
      <Slider {...settings} className='Slider'>
        <div className='CarsolImg'>
          <img src={shop} alt="Image 1" />
        </div>
        <div className='CarsolImg'>
          <img src={photo2} alt="Image 2" />
        </div>
        <div className='CarsolImg'>
          <img src={photo3} alt="Image 3" />
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
}

export default CarouselWithTwoItems;