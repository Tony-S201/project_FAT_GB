/**
 * NPM import
 */
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

/**
 * Local import
 */

// Styles

/**
 * Code
 */
const Discomobile = ({ discoRectos, discoVersos, discoDatas }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {discoDatas.map(disco => (
        <div key={disco.id} className="discomobile" {...disco}>
          <img className="discomobile-pic" src={disco.custom_fields.album_first_side} alt={disco.title.rendered} />
          <p className="discomobile-text">{disco.title.rendered}</p>
        </div>
      ))}
    </Slider>
  );
};

/**
 * Proptypes
 */

Discomobile.propTypes = {
  discoItems: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Discomobile;
