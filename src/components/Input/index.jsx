import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Input = ({ name, type, onChange, value, placeholder, errorText, ...rest }) => {
  return (
    <>
      <input
        className="input"
        {...rest}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {errorText && <p className="input__error">{errorText}</p>}
    </>
  );
};

Input.prototype = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorText: PropTypes.string
};

export default Input;
