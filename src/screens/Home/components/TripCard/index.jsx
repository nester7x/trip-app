import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
const TripCard = ({ img, cityName, bookedDate, ...rest }) => {
  return (
    <div className="trip-card" {...rest}>
      <img className="trip-card__img" src={img} alt={cityName} />
      <h6 className="trip-card__title">{cityName}</h6>
      <p className="trip-card__booking">{bookedDate}</p>
    </div>
  );
};

TripCard.prototype = {
  img: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  bookedDate: PropTypes.string.isRequired
};

export default TripCard;
