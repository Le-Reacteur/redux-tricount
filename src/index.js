import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
// Milligram is small CSS theme
import 'milligram';
import './index.css';

import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello React</h1>
  </Provider>,
  document.getElementById('root')
);
