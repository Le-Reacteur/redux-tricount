import React from 'react';
import PropTypes from 'prop-types';

/**
 * Mainly CSS, used to create the layout
 */

export const Panels = ({ children }) => <div className="panels">{children}</div>;

Panels.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
