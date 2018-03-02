import React from 'react';
import PropTypes from 'prop-types';
import { Amount } from './Amount';
import { Button } from './Button';

/**
 * Represent an expense, rendering the description,
 * the amout and the user (with it's color) if provided.
 */

export const Expense = ({ amount, description, userName, userColor, onRemove }) => {
  const hasUser = userName && userColor;

  return (
    <div className="expense">
      <div className="expense--info">
        <p className="expense--description">{description}</p>
        {hasUser && (
          <div className="expense--user">
            <div className="expense--user-color" style={{ background: userColor }} />
            <p className="expense--user-text">{userName}</p>
          </div>
        )}
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
  userName: PropTypes.string,
  userColor: PropTypes.string,
  onRemove: PropTypes.func,
};
