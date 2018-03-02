import PropTypes from 'prop-types';

// We export some PropTypes

const userWithSum = PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
});

const usersWithSum = PropTypes.arrayOf(userWithSum);

const expenseWithUser = PropTypes.shape({
  amount: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  description: PropTypes.string.isRequired,
});

const expensesWithUser = PropTypes.arrayOf(expenseWithUser);

const usersNameById = PropTypes.objectOf(PropTypes.string.isRequired);

export const CustomPropTypes = {
  userWithSum,
  usersWithSum,
  expenseWithUser,
  expensesWithUser,
  usersNameById,
};

// Selectors

export function selectUsers(state) {
  return state.users;
}

export function selectExpenses(state) {
  return state.expenses;
}

export function selectUsersWithSum(state) {
  const users = selectUsers(state);
  const expenses = selectExpenses(state);
  const usersWithSum = users.map(user => {
    const sum = expenses
      .filter(expense => expense.userId === user.id)
      .reduce((acc, expense) => acc + expense.amount, 0);
    return {
      ...user,
      sum,
    };
  });
  return usersWithSum;
}

export function selectExpensesWithUser(state) {
  const users = selectUsers(state);
  return state.expenses.map(expense => {
    const user = users.find(user => {
      return expense.userId === user.id;
    });
    return {
      ...expense,
      user,
    };
  });
}

export function selectUsersByIds(state) {
  const users = selectUsers(state);
  return users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});
}
