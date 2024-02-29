import React from 'react';
import PropTypes from 'prop-types';

import cross from 'src/assets/Images/x-button.png';
import Button from '../Button';

import './styles.css';

const Modal = ({ title, handleSubmit, setIsOpen, error, children }) => {
  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="modal__description">
        <h6 className="modal__title">{title}</h6>
        <img
          className="modal__cross"
          src={cross}
          alt="cross icon"
          onClick={() => setIsOpen(false)}
        />
      </div>
      {children}
      <p className="modal__error">{error}</p>
      <div className="modal__buttons">
        <Button
          className="btn modal__btn modal__btn--cancel"
          type="reset"
          text="Cancel"
          onClick={() => setIsOpen(false)}
          disabled={false}
        />
        <Button
          className="btn modal__btn modal__btn--save"
          type="submit"
          text="Save"
          disabled={false}
        />
      </div>
    </form>
  );
};

Modal.prototype = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
