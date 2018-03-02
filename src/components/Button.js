import React from 'react';
import PropTypes from 'prop-types';

/**
 * A button component
 */

export const Button = ({
  children,
  submit = false,
  flatStyle = false,
  className = '',
  dangerStyle = false,
  onClick,
}) => (
  <button
    className={['button', flatStyle ? 'button--flat' : '', className, dangerStyle ? 'button--danger' : ''].join(' ')}
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
  flatStyle: PropTypes.bool,
  dangerStyle: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
