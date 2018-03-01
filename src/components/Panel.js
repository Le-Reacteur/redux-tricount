import React from 'react';
import PropTypes from 'prop-types';

export const Panel = ({ children }) => <div className="panel">{children}</div>;

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
