import React, { useState } from 'react';

import Modal from 'src/components/Modal';
import checkDateRange from 'src/utils/checkDateRange';
import isOverlapping from 'src/utils/isOverlappingDates';
import citiesDB from 'src/data/citiesDB.json';

const TripAdd = ({ handleAddTrip, isOpen, setIsOpen, tripCards }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [modalError, setModalError] = useState('');

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedCity = citiesDB.find(
      (city) => city.cityName === document.getElementById('city').value
    );
    if (!selectedCity) {
      setModalError('Choose a city');
      return;
    }

    if (checkDateRange(startDate, endDate)) {
      setModalError(checkDateRange(startDate, endDate));
      return;
    }

    if (isOverlapping(tripCards, new Date(startDate), new Date(endDate))) {
      setModalError(isOverlapping(tripCards, new Date(startDate), new Date(endDate)));
      return;
    }

    const newTrip = {
      img: selectedCity.cityImg,
      cityName: selectedCity.cityName,
      startDate: new Date(startDate),
      endDate: new Date(endDate)
    };
    handleAddTrip(newTrip);

    setModalError('');
    setIsOpen(false);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    isOpen && (
      <Modal
        title="Add trip"
        setIsOpen={handleCloseModal}
        handleSubmit={handleSubmit}
        error={modalError}>
        <label className="modal__label">
          <span>City</span>
          <select className="modal__select" name="city" id="city" defaultValue="">
            <option value="" disabled hidden>
              Choose here
            </option>
            {citiesDB?.map((city, index) => (
              <option className="modal__option" key={index} value={city?.cityName}>
                {city?.cityName}
              </option>
            ))}
          </select>
        </label>
        <label className="modal__label">
          <span>Start date</span>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
        </label>
        <label className="modal__label">
          <span>End date</span>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </label>
      </Modal>
    )
  );
};

export default TripAdd;
