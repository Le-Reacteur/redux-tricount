import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { Input } from '../components/Input';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent, Validator } from '../utils';
import { addExpense } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = null;

const mapDispatchToProps = {
  addExpense,
};

const NewExpenseFormRender = ({ addExpense }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const data = extractDataFromSubmitEvent(e);
        // Validate data
        const validated = Validator.validate(
          Validator.schema({
            description: Validator.notEmptyStr('You must provide a description'),
            amount: Validator.numberFromString('Amount must be a valid number'),
          }),
          data
        );
        if (validated.error) {
          alert(validated.error);
          return;
        }
        addExpense(validated.value.amount, validated.value.description);
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

NewExpenseFormRender.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export const NewExpenseForm = connect(mapStateToProps, mapDispatchToProps)(NewExpenseFormRender);
