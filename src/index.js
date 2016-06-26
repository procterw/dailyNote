
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './configureStore.js';

import App from './App.js';

import Calendar from './containers/Calendar/Calendar.js';
import Note from './containers/Note/Note.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="calendar(/:year)" component={Calendar}/>
        <Route path="note/:day" component={Note}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
