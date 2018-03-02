export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (amount, description) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      amount,
      description,
    },
  };
};

export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const removeExpense = expenseIndex => ({ type: REMOVE_EXPENSE, payload: expenseIndex });
