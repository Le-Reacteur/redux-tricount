import { initialState as users } from './usersReducer';
import { ADD_EXPENSE, REMOVE_USER, REMOVE_EXPENSE } from '../../actions';

const randomUserId = () => users[Math.floor(users.length * Math.random())].id;
const randomAmount = () => Math.floor(Math.random() * 10000) / 100;

const initialState = [
  {
    amount: randomAmount(),
    description: 'First Expense',
    userId: randomUserId(),
  },
  {
    amount: randomAmount(),
    description: 'Second Expense',
    userId: randomUserId(),
  },
  {
    amount: randomAmount(),
    description: 'Third Expense',
    userId: randomUserId(),
  },
  {
    amount: randomAmount(),
    description: 'Fourth Expense',
    userId: randomUserId(),
  },
  {
    amount: randomAmount(),
    description: 'Fifth Expense',
    userId: randomUserId(),
  },
];

export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case REMOVE_EXPENSE:
      return state.filter((expense, index) => index !== action.payload);
    // When a user is removed, we remove all it's expenses
    case REMOVE_USER:
      return state.filter(expense => expense.userId !== action.payload);
    default:
      return state;
  }
};
