import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder }) => (
  <div className="input">
    <input type="text" className="input--input" placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
};
