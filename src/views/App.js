import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectExpenses } from '../selectors';
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
  expenses: selectExpenses(state),
});

const mapDispatchToProps = {
  removeExpense,
};

const AppRender = ({ expenses, removeExpense }) => {
  const noExpenses = expenses.length === 0;
  return (
    <Panels>
      <Panel>
        <Card title="Users">
          <List>
            <User name="Farid" color="green" />
            <User name="Etienne" color="blue" />
            <User name="Superman" color="red" />
          </List>
        </Card>
      </Panel>
      <Panel>
        <Card title="Expenses">
          {noExpenses ? (
            <CenteredText>You don't have any expenses, use the form below to add one</CenteredText>
          ) : (
            <List>
              {expenses.map((expense, index) => (
                <Expense
                  key={index}
                  description={expense.description}
                  amount={expense.amount}
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
  expenses: PropTypes.arrayOf(
    PropTypes.shape({ description: PropTypes.string.isRequired, amount: PropTypes.number.isRequired })
  ).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppRender);
