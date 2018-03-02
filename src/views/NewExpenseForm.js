import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Select } from '../components/Select';
import { ButtonContainer } from '../components/ButtonContainer';
import { Input } from '../components/Input';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent, Validator } from '../utils';
import { addExpense } from '../actions';
import { connect } from 'react-redux';
import { selectUsers, CustomPropTypes } from '../selectors';

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
        const validated = Validator.validate(
          Validator.schema({
            userId: Validator.notEqualWrapper(
              Validator.notEmptyStr('Missing UserId'),
              'none',
              'Please select a User !'
            ),
            description: Validator.notEmptyStr('You must provide a description'),
            amount: Validator.numberFromString('Amount must be a valid number'),
          }),
          data
        );
        if (validated.error) {
          alert(validated.error);
          return;
        }
        addExpense(validated.value.userId, validated.value.amount, validated.value.description);
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
