const initialState = [
  {
    amount: 12,
    userId: 0,
    description: 'Some expense',
    date: new Date('2018-02-01'),
  },
  {
    amount: 10,
    userId: 0,
    description: 'Some expense',
    date: new Date('2018-02-01'),
  },
  {
    amount: 10,
    userId: 0,
    description: 'Some expense',
    date: new Date('2018-02-01'),
  },
  {
    amount: 10,
    userId: 0,
    description: 'Some expense',
    date: new Date('2018-02-01'),
  },
  {
    amount: 10,
    userId: 0,
    description: 'Some expense',
    date: new Date('2018-02-01'),
  },
];

export const expensesReducer = (state = initialState, action) => {
  return state;
};
