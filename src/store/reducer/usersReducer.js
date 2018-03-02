import { uniqueId, getRandomColor } from '../../utils';
import { REMOVE_USER } from '../../actions';

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
  switch (action.type) {
    case REMOVE_USER:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};
