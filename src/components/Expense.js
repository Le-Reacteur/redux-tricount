import React from 'react';
import PropTypes from 'prop-types';
import { Amount } from './Amount';
import { Button } from './Button';

export const Expense = ({ amount, description, userName, userColor, onRemove }) => {
  return (
    <div className="expense">
      <div className="expense--info">
        <p className="expense--description">{description}</p>
        <div className="expense--user">
          <div className="expense--user-color" style={{ background: userColor }} />
          <p className="expense--user-text">{userName}</p>
        </div>
      </div>
      <Amount className={onRemove ? 'user--amount' : ''} value={amount} />
      {onRemove && (
        <Button flatStyle dangerStyle className="expense--delete" onClick={onRemove}>
          Delete
        </Button>
      )}
    </div>
  );
};

Expense.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userColor: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};
