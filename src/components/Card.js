import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, title }) => (
  <div className="card">
    {title && <h2 className="card--title">{title}</h2>}
    {children}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
