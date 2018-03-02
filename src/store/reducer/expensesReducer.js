import { ADD_EXPENSE, REMOVE_EXPENSE } from '../../actions';

const randomAmount = () => Math.floor(Math.random() * 10000) / 100;

const initialState = [
  {
    amount: randomAmount(),
    description: 'First Expense',
  },
  {
    amount: randomAmount(),
    description: 'Second Expense',
  },
  {
    amount: randomAmount(),
    description: 'Third Expense',
  },
  {
    amount: randomAmount(),
    description: 'Fourth Expense',
  },
  {
    amount: randomAmount(),
    description: 'Fifth Expense',
  },
];

export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case REMOVE_EXPENSE:
      return state.filter((expense, index) => index !== action.payload);
    default:
      return state;
  }
};
