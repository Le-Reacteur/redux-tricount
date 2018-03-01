import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children }) => <button className="button">{children}</button>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
