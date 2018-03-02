import { createStore } from 'redux';

// Identity reducer for now
const reducer = (state = {}, action) => state;

export const store = createStore(reducer);
