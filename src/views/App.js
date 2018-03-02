import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectExpensesWithUser, selectUsers } from '../selectors';
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
  users: selectUsers(state),
});

const mapDispatchToProps = {
  removeExpense,
};

const AppRender = ({ expensesWithUser, removeExpense, users }) => {
  const noExpenses = expensesWithUser.length === 0;
  const noUsers = users.length === 0;
  return (
    <Panels>
      <Panel>
        <Card title="Users">
          {noUsers ? (
            <CenteredText>You don't have any users, use the form below to add one</CenteredText>
          ) : (
            <List>{users.map(user => <User key={user.id} name={user.name} color={user.color} />)}</List>
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppRender);
