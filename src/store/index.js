import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

const store = createStore(
    createRootReducer(),
    applyMiddleware(logger, thunk)
);

export default store;