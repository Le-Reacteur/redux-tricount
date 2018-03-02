import { initialState as users } from './usersReducer';
import { ADD_EXPENSE } from '../../actions';

const randomUserId = () => users[Math.floor(users.length * Math.random())].id;
const randomAmount = () => Math.floor(Math.random() * 10000) / 100;

const initialState = [
  {
    amount: randomAmount(),
    userId: randomUserId(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    userId: randomUserId(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    userId: randomUserId(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    userId: randomUserId(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    userId: randomUserId(),
    description: 'Some expense',
  },
];

export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    default:
      return state;
  }
};
