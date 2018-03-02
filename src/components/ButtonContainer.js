import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is used to align and add margin to a Button
 */

export const ButtonContainer = ({ children, align = 'right' }) => (
  <div className="button-container" style={{ justifyContent: align === 'left' ? 'flex-start' : 'flex-end' }}>
    {children}
  </div>
);

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};
