import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectExpenses } from '../selectors';
import { Panels } from '../components/Panels';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { List } from '../components/List';
import { Expense } from '../components/Expense';
import { NewExpenseForm } from './NewExpenseForm';
import { removeExpense } from '../actions';

const mapStateToProps = state => ({
  expenses: selectExpenses(state),
});

const mapDispatchToProps = {
  removeExpense,
};

const AppRender = ({ expenses, removeExpense }) => {
  return (
    <Panels>
      <Panel>
        <Card title="Expenses">
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
