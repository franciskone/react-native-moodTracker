import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { persistedReducersList } from './rootReducer';

const persistConfig = {
  key: 'moodTrackerAppRoot',
  storage,
  whitelist: persistedReducersList,
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
