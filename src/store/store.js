import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './reducers/index.js';
// Imports: Redux Root Saga
import {rootSaga} from './sagas/index.js';
// Middleware: Redux Saga

const middleware = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));
// Redux: Store
const store = createStore(rootReducer, compose(...enhancers));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
