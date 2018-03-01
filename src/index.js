import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
// Note Milligram is small CSS theme
import 'milligram';
import './index.css';
import { App } from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
