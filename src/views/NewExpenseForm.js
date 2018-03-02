import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { CustomPropTypes, selectUsers } from '../selectors';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent } from '../utils';

export const NewExpenseForm = () => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const data = extractDataFromSubmitEvent(e);
        // Validate data
        const amountStr = (data.amount || '').replace(/,/g, '.');
        const amount = parseFloat(amountStr, 10);
        if (Number.isNaN(amount)) {
          alert('Amount must be a valid number');
          return;
        }
        if (!data.description) {
          alert('You must provide a description');
          return;
        }
        console.log(data);
        clearFormFromSubmitEvent(e);
      }}
    >
      <Card title="New Expense">
        <Input name="description" placeholder="Description" />
        <Input name="amount" placeholder="Amount" />
      </Card>
      <ButtonContainer>
        <Button submit>Add Expense</Button>
      </ButtonContainer>
    </form>
  );
};
