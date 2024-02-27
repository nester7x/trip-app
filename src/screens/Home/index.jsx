import React from 'react';

import Search from 'src/components/Search';
import TripCard from './components/TripCard';
import Aside from './components/Aside';
import WeekForecast from './components/WeekForecast';

import berlinImg from 'src/assets/Images/brandenburger_tor.jpg';

import './styles.css';

const Home = () => {
  const tripCards = [
    {
      img: berlinImg,
      cityName: 'Berlin',
      bookedDate: '14.07.2023 - 21.07.2023'
    },
    {
      img: berlinImg,
      cityName: 'Berlin',
      bookedDate: '14.07.2023 - 21.07.2023'
    }
  ];

  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">
          Weather <span>Forecast</span>
        </h1>
        <Search />
        <div className="home__trip-cards">
          {tripCards.map((card, index) => (
            <TripCard
              key={index}
              img={card.img}
              cityName={card.cityName}
              bookedDate={card.bookedDate}
            />
          ))}
          <button className="home__add-trip-btn">
            <span>+</span>Add trip
          </button>
        </div>
        <WeekForecast />
      </div>
      <Aside />
    </div>
  );
};

export default Home;
