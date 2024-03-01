import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { icons } from 'src/constants/weatherIcons';
import { formatWeekDay } from 'src/utils/formatDate';
import parseSnakeToCamel from 'src/utils/snakeToCamel';
import penguin from 'src/assets/Images/penguin.png';

import './styles.css';

const Aside = ({ selectedTripStartDate, todayWeather }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (selectedTripStartDate) {
      const intervalId = setInterval(() => {
        const now = new Date().getTime();
        const startDate = new Date(selectedTripStartDate).getTime();
        const difference = startDate - now;

        if (difference < 0) {
          clearInterval(intervalId);
          return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [selectedTripStartDate]);

  return (
    <aside className="home__aside">
      <img className="aside__img" src={penguin} alt="penguin" />
      {todayWeather && todayWeather.days && todayWeather.days.length > 0 && (
        <>
          <h6 className="aside__week-day">{formatWeekDay(todayWeather.days[0].datetime)}</h6>
          <span className="aside__temperature">
            <img
              className="aside__weather-icon"
              src={icons[parseSnakeToCamel(todayWeather.days[0].icon)]}
              alt=""
            />
            {todayWeather.days[0].temp !== null ? `${todayWeather.days[0].temp} °C` : 'N/A'}
          </span>
        </>
      )}
      {todayWeather && todayWeather.resolvedAddress && (
        <p className="aside__city">{todayWeather.resolvedAddress}</p>
      )}
      {selectedTripStartDate && (
        <div className="aside__timer">
          <span className="timer__num timer__num-days">
            {countdown.days}
            <span>DAYS</span>
          </span>
          <span className="timer__num timer__num-hours">
            {countdown.hours}
            <span>HOURS</span>
          </span>
          <span className="timer__num timer__num-minutes">
            {countdown.minutes}
            <span>MINUTES</span>
          </span>
          <span className="timer__num timer__num-seconds">
            {countdown.seconds}
            <span>SECONDS</span>
          </span>
        </div>
      )}
    </aside>
  );
};

Aside.prototype = {
  selectedTripStartDate: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired
};

export default Aside;
