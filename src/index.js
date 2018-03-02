import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
// Note Milligram is small CSS theme
import 'milligram';
import './index.css';
// import { App } from './views/App';
// import { store } from './store';
// import { Provider } from 'react-redux';

import { Starter } from './views/Stater';

// ReactDOM.render(
//   <Provider store={store}>
//   <App />,
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(<Starter />, document.getElementById('root'));
