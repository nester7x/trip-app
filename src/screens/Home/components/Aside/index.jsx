import React from 'react';

import penguin from 'src/assets/Images/penguin.png';

import './styles.css';
const Aside = () => {
  return (
    <aside className="home__aside">
      <img className="aside__img" src={penguin} alt="penguin" />
      <h6 className="aside__week-day">Sunday</h6>
      <span className="aside__temperature">24*</span>
      <p className="aside__city">Berlin</p>
      <div className="aside__timer">
        <span className="timer__num timer__num-days">
          30
          <span>DAYS</span>
        </span>
        <span className="timer__num timer__num-hours">
          15
          <span>HOURS</span>
        </span>
        <span className="timer__num timer__num-minutes">
          15
          <span>MINUTES</span>
        </span>
        <span className="timer__num timer__num-seconds">
          30
          <span>SECONDS</span>
        </span>
      </div>
    </aside>
  );
};

export default Aside;
