import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import searchIcon from 'src/assets/Images/search.png';

import './styles.css';

const Search = ({ errorText }) => {
  return (
    <div className="search">
      <img className="search__img" src={searchIcon} alt="sd" />
      <Input
        className="input search__input"
        name="search"
        errorText={errorText}
        placeholder="Search your trip"
        type="text"
      />
    </div>
  );
};

Search.prototype = {
  errorText: PropTypes.string
};

export default Search;
