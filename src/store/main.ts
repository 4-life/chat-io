import { compose, applyMiddleware, Store as ReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { RootState } from './reducer';
import saga from './saga';

export type Store = ReduxStore<RootState>;

export function createStore(): Store {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composedEnhancers = compose(middlewareEnhancer);

  const store = configureStore({
    reducer,
    enhancers: (defaultEnhancers) => [composedEnhancers, ...defaultEnhancers],
  });

  sagaMiddleware.run(saga);

  return store;
}
