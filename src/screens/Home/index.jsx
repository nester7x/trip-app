import React, { useState } from 'react';

import Search from 'src/components/Search';
import TripCard from './components/TripCard';
import Aside from './components/Aside';
import WeekForecast from './components/WeekForecast';
import { formatDayMonthYear, formatYearMonthDay } from 'src/utils/formatDate';
import { api } from 'src/utils/apiUtils';

import TripAdd from './components/TripAdd';

import './styles.css';

const Home = () => {
  const [tripCards, setTripCards] = useState(() => {
    const storedTrips = localStorage.getItem('tripCards');
    return storedTrips ? JSON.parse(storedTrips) : [];
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
      (a, b) => new Date(a.bookedDate.split(' - ')[0]) - new Date(b.bookedDate.split(' - ')[0])
    );
    setTripCards(sortedTrips);
    localStorage.setItem('tripCards', JSON.stringify(sortedTrips));
  };

  const handleChooseTrip = async (cityName, bookedDate, index) => {
    try {
      const todayData = await api.get(`${cityName}/today?unitGroup=metric&include=days`);
      setTodayWeather(todayData);

      const weekData = await api.get(
        `${cityName}/${formatYearMonthDay(bookedDate.split(' - ')[0])}/${formatYearMonthDay(bookedDate.split(' - ')[1])}?unitGroup=metric&include=days`
      );
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
              bookedDate={`${formatDayMonthYear(card.bookedDate.split(' - ')[0])} - ${formatDayMonthYear(card.bookedDate.split(' - ')[1])}`}
              handleClick={() => handleChooseTrip(card.cityName, card.bookedDate, index)}
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
        selectedTripStartDate={tripCards[selectedTripIndex]?.bookedDate.split(' - ')[0]}
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
