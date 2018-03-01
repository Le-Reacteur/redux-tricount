import React from 'react';
import PropTypes from 'prop-types';
import { Amount } from './Amount';

export const User = ({ name, sum, color }) => {
  return (
    <div className="user">
      <div className="user--img" style={{ background: color }} />
      <p className="user--name">{name}</p>
      <Amount value={sum} />
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
