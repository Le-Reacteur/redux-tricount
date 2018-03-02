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
import { selectExpensesWithUser, CustomPropTypes, selectUsers } from '../selectors';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent } from '../utils';
import { addExpense, removeExpense } from '../actions';
import { CenteredText } from '../components/CenteredText';

const mapStateToProps = state => ({
  expensesWithUsers: selectExpensesWithUser(state),
  users: selectUsers(state),
});

const mapDispatchToProps = {
  addExpense,
  removeExpense,
};

const ExpensesPanelRender = ({ expensesWithUsers, users, addExpense, removeExpense }) => {
  const noUsers = users.length === 0;
  const noExpenses = expensesWithUsers.length === 0;
  return (
    <Panel>
      <Card title="Expenses">
        {noUsers ? (
          <CenteredText>Create your first user to add expenses</CenteredText>
        ) : noExpenses ? (
          <CenteredText>You don't have any expenses, use the form below to add one</CenteredText>
        ) : (
          <List>
            {expensesWithUsers.map((expense, index) => (
              <Expense
                key={index}
                amount={expense.amount}
                description={expense.description}
                userColor={expense.user ? expense.user.color : 'black'}
                userName={expense.user ? expense.user.name : 'Anonymous'}
                onRemove={() => removeExpense(index)}
              />
            ))}
          </List>
        )}
      </Card>
      {!noUsers && (
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
              options={[
                { key: 'none', text: 'Select an user' },
                ...users.map(user => ({ key: user.id, text: user.name })),
              ]}
              label="User"
            />
          </Card>
          <ButtonContainer>
            <Button submit>Add Expense</Button>
          </ButtonContainer>
        </form>
      )}
    </Panel>
  );
};

ExpensesPanelRender.propTypes = {
  expensesWithUsers: CustomPropTypes.expensesWithUser.isRequired,
  users: CustomPropTypes.users.isRequired,
  addExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export const ExpensesPanel = connect(mapStateToProps, mapDispatchToProps)(ExpensesPanelRender);
