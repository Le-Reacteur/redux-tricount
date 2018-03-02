import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { Input } from '../components/Input';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent, Validator } from '../utils';

export const NewExpenseForm = () => {
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
        console.log(validated.value);
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
