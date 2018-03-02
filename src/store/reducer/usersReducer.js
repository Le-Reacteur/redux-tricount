import { uniqueId, getRandomColor } from '../../utils';

export const initialState = [
  {
    id: uniqueId('user'),
    name: 'Etienne',
    color: getRandomColor(),
  },
  {
    id: uniqueId('user'),
    name: 'Farid',
    color: getRandomColor(),
  },
  {
    id: uniqueId('user'),
    name: 'Superman',
    color: getRandomColor(),
  },
];

export const usersReducer = (state = initialState, action) => {
  return state;
};
