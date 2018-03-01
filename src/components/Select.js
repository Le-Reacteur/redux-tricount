import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ options, name, label }) => (
  <div className="select">
    {label && (
      <label htmlFor={name} className="select--label">
        {label}
      </label>
    )}
    <select className="select--select" name={name}>
      {React.Children.toArray(
        Object.keys(options).map(optionId => <option value={optionId}>{options[optionId]}</option>)
      )}
    </select>
  </div>
);

Select.propTypes = {
  options: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};
