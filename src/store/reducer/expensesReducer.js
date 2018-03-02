const randomAmount = () => Math.floor(Math.random() * 10000) / 100;

const initialState = [
  {
    amount: randomAmount(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    description: 'Some expense',
  },
  {
    amount: randomAmount(),
    description: 'Some expense',
  },
];

export const expensesReducer = (state = initialState, action) => {
  return state;
};
