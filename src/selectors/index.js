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
