import React from 'react';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from '../App.js';
import Wall from '../components/Wall/Wall.js';
import Note from '../components/Note/Note.js';
import { requireAuthentication } from '../components/AuthenticatedComponent/AuthenticatedComponent.js';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/calendar" />
      <Route path="calendar(/:activeYear)(/:activeCalendar)" component={requireAuthentication(Wall)}/>
      <Route path="note/:day/:activeCalendar" component={requireAuthentication(Note)}/>
    </Route>
  </Router>
);
