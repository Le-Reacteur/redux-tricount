const randomAmount = () => Math.floor(Math.random() * 10000) / 100;

const initialState = [
  {
    amount: randomAmount(),
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
