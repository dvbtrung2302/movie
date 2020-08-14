import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

ItemsSlide.propTypes = {
  
};

function ItemsSlide(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="items-slide">
      <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            {/* <img src='' alt={title}/> */}
          </div>
        </Slider>
    </div>
  );
}

export default ItemsSlide;