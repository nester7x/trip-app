import React from 'react';

import { formatWeekDay } from 'src/utils/formatDate';
import parseSnakeToCamel from 'src/utils/snakeToCamel';
import { icons } from 'src/constants/weatherIcons';

import './styles.css';
import PropTypes from 'prop-types';

const WeekForecast = ({ weekWeather }) => {
  return (
    <div className="week">
      <h6 className="week__title">Week</h6>
      <div className="week__content">
        {weekWeather?.map((day, index) => (
          <div key={index} className="week__day-info">
            <span className="week__day-name">{formatWeekDay(day?.datetime)}</span>
            <img
              className="week__day-img"
              src={icons[parseSnakeToCamel(day?.icon)]}
              alt={`${day?.icon}`}
            />
            <span className="week__day-temperature">{day.temp} °C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

WeekForecast.prototype = {
  weekWeather: PropTypes.object.isRequired
};

export default WeekForecast;
