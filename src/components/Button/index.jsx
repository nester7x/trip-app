import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ onClick, type = 'button', text, disabled = false, ...rest }) => (
  <button className="btn" {...rest} onClick={onClick} type={type} disabled={disabled}>
    {text}
  </button>
);

Button.prototype = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
