import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { Expense } from '../components/Expense';
import { List } from '../components/List';
import { selectExpensesWithUser, CustomPropTypes, selectUsers } from '../selectors';
import { removeExpense } from '../actions';
import { CenteredText } from '../components/CenteredText';
import { NewExpenseForm } from './NewExpenseForm';

const mapStateToProps = state => ({
  expensesWithUsers: selectExpensesWithUser(state),
  users: selectUsers(state),
});

const mapDispatchToProps = {
  removeExpense,
};

const ExpensesPanelRender = ({ expensesWithUsers, users, removeExpense }) => {
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
      <NewExpenseForm />
    </Panel>
  );
};

ExpensesPanelRender.propTypes = {
  expensesWithUsers: CustomPropTypes.expensesWithUser.isRequired,
  users: CustomPropTypes.users.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export const ExpensesPanel = connect(mapStateToProps, mapDispatchToProps)(ExpensesPanelRender);
