import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { Expense } from '../components/Expense';
import { List } from '../components/List';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { selectExpensesWithUser, CustomPropTypes, selectUsersByIds } from '../selectors';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent } from '../utils';
import { addExpense } from '../actions';

const mapStateToProps = state => ({
  expensesWithUsers: selectExpensesWithUser(state),
  usersByIds: selectUsersByIds(state),
});

const mapDispatchToProps = {
  addExpense,
};

const ExpensesPanelRender = ({ expensesWithUsers, usersByIds, addExpense }) => {
  return (
    <Panel>
      <Card title="Expenses">
        <List>
          {expensesWithUsers.map((expense, index) => (
            <Expense
              key={index}
              amount={expense.amount}
              description={expense.description}
              userColor={expense.user.color}
              userName={expense.user.name}
            />
          ))}
        </List>
      </Card>
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
          <Select name="userId" options={usersByIds} label="User" />
        </Card>
        <ButtonContainer>
          <Button submit>Add Expense</Button>
        </ButtonContainer>
      </form>
    </Panel>
  );
};

ExpensesPanelRender.propTypes = {
  expensesWithUsers: CustomPropTypes.expensesWithUser.isRequired,
  usersByIds: CustomPropTypes.usersNameById.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export const ExpensesPanel = connect(mapStateToProps, mapDispatchToProps)(ExpensesPanelRender);
