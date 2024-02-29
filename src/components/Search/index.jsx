import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useSearchParams } from 'react-router-dom';

import Input from '../Input';
import { getURLParams } from 'src/utils/getURLParams';
import useDebounce from 'src/hooks/useDebounce';
import searchIcon from 'src/assets/Images/search.png';

import './styles.css';

const Search = ({ errorText, onSearch }) => {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    decodeURIComponent(getURLParams(location.search, 'q')).replace(/\+/g, ' ')
  );
  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  const handleInputChange = (event) => setSearchValue(event.target.value);

  useEffect(() => {
    setSearchParams((prev) => ({ ...prev, q: debouncedSearchTerm }));
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="search">
      <img className="search__img" src={searchIcon} alt="search_icon" />
      <Input
        className="input search__input"
        name="search"
        errorText={errorText}
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search your trip"
        type="text"
      />
    </div>
  );
};

Search.prototype = {
  errorText: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

export default Search;
