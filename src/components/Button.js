import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, submit = false }) => (
  <button className="button" type={submit ? 'submit' : 'button'}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
};
