import React from 'react';
import PropTypes from 'prop-types';
import { Amount } from './Amount';

export const Expense = ({ amount, description, userName, userColor }) => {
  return (
    <div className="expense">
      <div className="expense--info">
        <p className="expense--description">{description}</p>
        <div className="expense--user">
          <div className="expense--user-color" style={{ background: userColor }} />
          <p className="expense--user-text">{userName}</p>
        </div>
      </div>
      <Amount value={amount} />
    </div>
  );
};

Expense.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userColor: PropTypes.string.isRequired,
};
