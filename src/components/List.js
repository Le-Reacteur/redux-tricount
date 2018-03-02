import React from 'react';
import PropTypes from 'prop-types';

/**
 * A list container (just a div with some CSS)
 */

export const List = ({ children }) => <div className="list">{children}</div>;

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
