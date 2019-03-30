import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer, persistedReducersList } from "./rootReducer";
import { PERSIST_KEY } from "./constants";

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  whitelist: persistedReducersList,
};
export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
