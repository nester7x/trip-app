import React from 'react';

import './styles.css';

const WeekForecast = () => {
  const weekForecast = [
    {
      dayName: 'monday',
      temperature: '28*/21*'
    },
    {
      dayName: 'tuesday',
      temperature: '28*/21*'
    },
    {
      dayName: 'wednesday',
      temperature: '28*/21*'
    },
    {
      dayName: 'thursday',
      temperature: '28*/21*'
    },
    {
      dayName: 'friday',
      temperature: '28*/21*'
    },
    {
      dayName: 'saturday',
      temperature: '28*/21*'
    },
    {
      dayName: 'sunday',
      temperature: '28*/21*'
    }
  ];

  return (
    <div className="week">
      <h6 className="week__title">Week</h6>
      <div className="week__content">
        {weekForecast.map((day, index) => (
          <div key={index} className="week__day-info">
            <span className="week__day-name">{day.dayName}</span>
            <img className="week__day-img" src="" alt="" />
            <span className="week__day-temperature">{day.temperature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
