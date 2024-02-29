import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const TripCard = ({ img, cityName, bookedDate, handleClick, selected, handleDelete, ...rest }) => {
  return (
    <div className={`trip-card ${selected ? 'focus' : ''}`} {...rest}>
      <div className="trip-card__content" onClick={(e) => handleClick(e)}>
        <img className="trip-card__img" src={img} alt={cityName} />
        <h6 className="trip-card__title">{cityName}</h6>
        <p className="trip-card__booking">{bookedDate}</p>
      </div>
      <button className="trip-card__delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

TripCard.prototype = {
  img: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  bookedDate: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default TripCard;
