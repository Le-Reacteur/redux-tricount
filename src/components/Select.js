import React from 'react';
import PropTypes from 'prop-types';

/**
 * A select input, the options props should be a list of object:
 * { key: 'the-key', text: 'The description' }
 */

export const Select = ({ options, name, label }) => (
  <div className="select">
    {label && (
      <label htmlFor={name} className="select--label">
        {label}
      </label>
    )}
    <select className="select--select" name={name}>
      {React.Children.toArray(options.map(option => <option value={option.key}>{option.text}</option>))}
    </select>
  </div>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string.isRequired, text: PropTypes.string.isRequired }))
    .isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};
