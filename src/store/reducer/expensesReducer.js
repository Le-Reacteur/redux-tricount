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
  return state;
};
