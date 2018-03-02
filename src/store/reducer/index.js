import { combineReducers } from 'redux';
import { expensesReducer } from './expensesReducer';
import { usersReducer } from './usersReducer';

export const reducer = combineReducers({
  users: usersReducer,
  expenses: expensesReducer,
});
