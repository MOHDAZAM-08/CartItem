import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shop from "../img/shop3.jpg"
import photo2 from "../img/uv (2).jpg"
import photo3 from "../img/whyImg.jpg"

function CarouselWithTwoItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 items at a time
    slidesToScroll: 1,
    gap:'10px'
  };

  return (
    <div className='CarouselWithTwoItems'>
      <h1>New Arrivals Items</h1>
      <Slider {...settings}>
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