
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import routes from './routes/routes.js';
import configureStore from './configureStore.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      {routes}
  </Provider>,
  document.getElementById('root')
);
