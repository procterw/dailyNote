import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import rootReducer from './rootReducer.js';

// Create store
export default function configureStore(initialState) {

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			thunkMiddleware,
			reduxPromiseMiddleware()
		)
	);
}
