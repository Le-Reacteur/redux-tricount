import { combineReducers } from 'redux';
import { expensesReducer } from './expensesReducer';

export const reducer = combineReducers({
  expenses: expensesReducer,
});
