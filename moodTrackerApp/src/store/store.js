import { compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistedRootReducer from './persistedRootReducer';
import middlewares from './middleware';

function createEmployeeStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(persistedRootReducer, composeEnhancers(middlewares));
  const persistor = persistStore(store);

  return { store, persistor };
}

export const { store, persistor } = createEmployeeStore();