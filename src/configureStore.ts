/**
 * Create the store with dynamic reducers
 */

import {createStore, applyMiddleware, compose} from 'redux';
import Reactotron from './ReactotronConfig';
import {enableMapSet} from 'immer';

import {
  createInjectorsEnhancer,
  // forceReducerReload
} from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';

enableMapSet();

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const sagaMonitor = Reactotron?.createSagaMonitor();

  const reduxSagaMonitorOptions = {sagaMonitor};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const {run: runSaga} = sagaMiddleware;

  // create our new saga monitor
  // Create the store with middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
    Reactotron?.createEnhancer(),
  ];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
}
