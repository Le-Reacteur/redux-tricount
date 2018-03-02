export function selectExpenses(state) {
  return state.expenses;
}

export function selectSum(state) {
  let sum = 0;
  state.expenses.forEach(expense => {
    sum = sum + expense.amount;
  });
  return sum;
}
