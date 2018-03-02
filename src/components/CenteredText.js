import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render some text centered
 */

export const CenteredText = ({ children }) => (
  <div className="centered-text">
    <div>{children}</div>
  </div>
);

CenteredText.propTypes = {
  children: PropTypes.node.isRequired,
};
