import React, { useState } from 'react';

import Search from 'src/components/Search';
import TripCard from './components/TripCard';
import Aside from './components/Aside';
import WeekForecast from './components/WeekForecast';
import TripAdd from './components/TripAdd';

import citiesDB from 'src/data/citiesDB.json';
import { formatYearMonthDay } from 'src/utils/formatDate';
import { api } from 'src/utils/apiUtils';

import './styles.css';

const Home = () => {
  const [tripCards, setTripCards] = useState(() => {
    const storedTrips = localStorage.getItem('tripCards');
    return storedTrips
      ? JSON.parse(storedTrips)
      : [
          {
            cityName: citiesDB[0]?.cityName,
            img: citiesDB[0]?.cityImg,
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 1)
          }
        ];
  });

  const [selectedTripIndex, setSelectedTripIndex] = useState(null);
  const [filteredTripCards, setFilteredTripCards] = useState(null);

  const [todayWeather, setTodayWeather] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [searchError, setSearchError] = useState('');

  const handleSearch = (query) => {
    setSearchError('');

    if (!query) {
      setFilteredTripCards(null);
      return;
    }

    const filteredTrips = tripCards.filter((trip) =>
      trip.cityName.toLowerCase().includes(query.toLowerCase())
    );

    if (!filteredTrips.length) {
      setSearchError('No match found');
    }

    setFilteredTripCards(filteredTrips);
  };

  const handleAddTrip = (newTrip) => {
    const updatedTripCards = [...tripCards, newTrip];
    const sortedTrips = updatedTripCards.sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    setTripCards(sortedTrips);
    localStorage.setItem('tripCards', JSON.stringify(sortedTrips));
  };

  const handleChooseTrip = async (cityName, startDate, endDate, index) => {
    try {
      const todayData = await api.get(`${cityName}/today?unitGroup=metric&include=days`);
      const weekData = await api.get(
        `${cityName}/${formatYearMonthDay(startDate)}/${formatYearMonthDay(endDate)}?unitGroup=metric&include=days`
      );

      setTodayWeather(todayData);
      setWeekWeather(weekData);

      setSelectedTripIndex(index);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleDeleteTrip = (index) => {
    const updatedTripCards = tripCards.filter((_, i) => i !== index);
    setTripCards(updatedTripCards);
    localStorage.setItem('tripCards', JSON.stringify(updatedTripCards));
    setSelectedTripIndex(null);

    setTodayWeather(null);
    setWeekWeather(null);
  };

  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">
          Weather <span>Forecast</span>
        </h1>
        <Search errorText={searchError} onSearch={handleSearch} />
        <div className="home__trip-cards">
          {(filteredTripCards || tripCards).map((card, index) => (
            <TripCard
              key={index}
              img={card.img}
              cityName={card.cityName}
              startDate={card.startDate}
              endDate={card.endDate}
              handleClick={() =>
                handleChooseTrip(card.cityName, card.startDate, card.endDate, index)
              }
              selected={selectedTripIndex === index}
              handleDelete={() => handleDeleteTrip(index)}
            />
          ))}
          <button className="home__add-trip-btn" onClick={() => setIsOpen(true)}>
            <span>+</span>Add trip
          </button>
        </div>
        <WeekForecast weekWeather={weekWeather?.days} />
      </div>
      <Aside
        selectedTripStartDate={tripCards[selectedTripIndex]?.startDate}
        todayWeather={todayWeather}
      />
      <TripAdd
        handleAddTrip={handleAddTrip}
        tripCards={tripCards}
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Home;
