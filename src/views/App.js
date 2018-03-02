import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectExpensesWithUser, selectUsersWithSum } from '../selectors';
import { Panels } from '../components/Panels';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { List } from '../components/List';
import { Expense } from '../components/Expense';
import { User } from '../components/User';
import { NewExpenseForm } from './NewExpenseForm';
import { removeExpense } from '../actions';
import { CenteredText } from '../components/CenteredText';

const mapStateToProps = state => ({
  expensesWithUser: selectExpensesWithUser(state),
  usersWithSum: selectUsersWithSum(state),
});

const mapDispatchToProps = {
  removeExpense,
};

const AppRender = ({ expensesWithUser, removeExpense, usersWithSum }) => {
  const noExpenses = expensesWithUser.length === 0;
  const noUsers = usersWithSum.length === 0;
  return (
    <Panels>
      <Panel>
        <Card title="Users">
          {noUsers ? (
            <CenteredText>You don't have any users, use the form below to add one</CenteredText>
          ) : (
            <List>
              {usersWithSum.map(user => <User key={user.id} name={user.name} color={user.color} sum={user.sum} />)}
            </List>
          )}
        </Card>
      </Panel>
      <Panel>
        <Card title="Expenses">
          {noExpenses ? (
            <CenteredText>You don't have any expenses, use the form below to add one</CenteredText>
          ) : (
            <List>
              {expensesWithUser.map((expense, index) => (
                <Expense
                  key={index}
                  description={expense.description}
                  amount={expense.amount}
                  userName={expense.user && expense.user.name}
                  userColor={expense.user && expense.user.color}
                  onRemove={() => removeExpense(index)}
                />
              ))}
            </List>
          )}
        </Card>
        <NewExpenseForm />
      </Panel>
    </Panels>
  );
};

AppRender.propTypes = {
  expensesWithUser: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
  }).isRequired,
  usersWithSum: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      sum: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppRender);
