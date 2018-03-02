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
import { addExpense } from '../actions';

const mapStateToProps = state => ({
  users: selectUsers(state),
});

const mapDispatchToProps = {
  addExpense,
};

const NewExpenseFormRender = ({ expensesWithUsers, users, addExpense, removeExpense }) => {
  if (users.length === 0) {
    return null;
  }
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
        if (!data.userId) {
          alert('Invalid user');
          return;
        }
        if (data.userId === 'none') {
          alert('You must select an user');
          return;
        }
        if (!data.description) {
          alert('You must provide a description');
          return;
        }
        addExpense(data.userId, amount, data.description);
        clearFormFromSubmitEvent(e);
      }}
    >
      <Card title="New Expense">
        <Input name="description" placeholder="Description" />
        <Input name="amount" placeholder="Amount" />
        <Select
          name="userId"
          options={[{ key: 'none', text: 'Select an user' }, ...users.map(user => ({ key: user.id, text: user.name }))]}
          label="User"
        />
      </Card>
      <ButtonContainer>
        <Button submit>Add Expense</Button>
      </ButtonContainer>
    </form>
  );
};

NewExpenseFormRender.propTypes = {
  users: CustomPropTypes.users.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export const NewExpenseForm = connect(mapStateToProps, mapDispatchToProps)(NewExpenseFormRender);
