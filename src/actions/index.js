import { getRandomColor, uniqueId } from '../utils';

export const ADD_USER = 'ADD_USER';

export const addUser = userName => {
  const color = getRandomColor();
  const userId = uniqueId('user');
  return {
    type: ADD_USER,
    payload: {
      color,
      id: userId,
      name: userName,
    },
  };
};

export const REMOVE_USER = 'DELETE_USER';

export const removeUser = userId => ({ type: REMOVE_USER, payload: userId });

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (userId, amount, description) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      userId,
      amount,
      description,
    },
  };
};
