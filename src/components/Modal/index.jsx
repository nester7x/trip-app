import React from 'react';
import './styles.css';
import cross from 'src/assets/Images/x-button.png';
import Button from '../Button';
import PropTypes from 'prop-types';
const Modal = ({ title, handleSubmit }) => {
  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="modal__description">
        <h6 className="modal__title">{title}</h6>
        <img src={cross} alt="" className="modal__cross" />
      </div>
      <label className="modal__label">
        <span>City</span>
        <select name="city" id="city" className="modal__select">
          <option value="Berlin" className="modal__option">
            Berlin
          </option>
          <option value="Rome" className="modal__option">
            Rome
          </option>
          <option value="Kyiv" className="modal__option">
            Kyiv
          </option>
        </select>
      </label>
      <label className="modal__label">
        <span>Start date</span>
        <input type="date" />
      </label>
      <label className="modal__label">
        <span>End date</span>
        <input type="date" />
      </label>
      <div className="modal__buttons">
        <Button
          className="btn modal__btn modal__btn--cancel"
          type="reset"
          text="Cancel"
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
  handleSubmit: PropTypes.func.isRequired
};

export default Modal;
