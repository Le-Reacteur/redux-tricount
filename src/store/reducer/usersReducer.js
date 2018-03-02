import { uniqueId, getRandomColor } from '../../utils';
import { ADD_USER } from '../../actions';

// Note: User Id are index of the array

export const initialState = [
  {
    id: uniqueId('user'),
    name: 'Etienne',
    color: getRandomColor(),
  },
  {
    id: uniqueId('user'),
    name: 'Lucas',
    color: getRandomColor(),
  },
  {
    id: uniqueId('user'),
    name: 'Farid',
    color: getRandomColor(),
  },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
