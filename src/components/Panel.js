import React from 'react';
import PropTypes from 'prop-types';

/**
 * Used as a child of Panels, just a div with some CSS
 */

export const Panel = ({ children }) => <div className="panel">{children}</div>;

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
