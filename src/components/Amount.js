import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render an amout with the interger bigger
 */

export const Amount = ({ value, className = '', large = false }) => {
  const leftNum = Math.floor(value);
  const rightNum = Math.abs(Math.floor((value * 100) % 100)).toString();
  const rightNumPadded = (rightNum.length === 1 ? '0' : '') + rightNum;

  return (
    <div className={['amount', className, large ? 'amount--large' : ''].join(' ')}>
      <span className="amount--big-num">{leftNum}</span>
      <span className="amount--small-num">{',' + rightNumPadded}</span>
      <span className="amount--currency">{'€'}</span>
    </div>
  );
};

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
  large: PropTypes.bool,
};
