export function selectExpenses(state) {
  return state.expenses;
}

export function selectUsers(state) {
  return state.users;
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
