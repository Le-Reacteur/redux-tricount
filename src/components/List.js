import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ children }) => <div className="list">{children}</div>;

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
