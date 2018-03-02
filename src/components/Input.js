import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, name }) => (
  <div className="input">
    <input name={name} type="text" className="input--input" placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};
