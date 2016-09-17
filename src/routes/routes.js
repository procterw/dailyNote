import React from 'react';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory, DefaultRoute } from 'react-router';

import App from '../App.js';
import Wall from '../components/Wall/Wall.js';
import Note from '../components/Note/Note.js';
import { requireAuthentication } from '../components/AuthenticatedComponent/AuthenticatedComponent.js';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="calendar(/:activeYear)(/:activeCalendar)" component={requireAuthentication(Wall)}/>
      <Route path="note/:day/:calendar" component={Note}/>
    </Route>
  </Router>
);
