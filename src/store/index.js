import { createStore } from 'redux';

// Identity reducer for now
const reducer = (state = {}, action) => state;

const devtool =
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, devtool);
