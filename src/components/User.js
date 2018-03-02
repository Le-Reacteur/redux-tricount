import React from 'react';
import PropTypes from 'prop-types';
import { Amount } from './Amount';
import { Button } from './Button';

export const User = ({ name, sum, color, onRemove }) => {
  return (
    <div className="user">
      <div className="user--img" style={{ background: color }} />
      <p className="user--name">{name}</p>
      <Amount value={sum} className="user--amount" />
      <Button flatStyle dangerStyle className="user--delete" onClick={onRemove}>
        Delete
      </Button>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};
