import { combineReducers } from 'redux';
import { expensesReducer } from './expensesReducer';
import { usersReducer } from './usersReducer';

export const reducer = combineReducers({
  expenses: expensesReducer,
  users: usersReducer,
});
