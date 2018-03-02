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
