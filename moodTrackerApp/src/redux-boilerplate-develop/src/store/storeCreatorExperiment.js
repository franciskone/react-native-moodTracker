// TODO franciskone: To be completed
import { applyMiddleware, compose, createStore } from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import { persistStore } from 'redux-persist';
import { persistedRootReducer } from './persistedRootReducer';
import { middlewares } from './middleware';

export const { store, persistor } = createEnhancedStore({persistedRootReducer, middlewares});

function createEnhancedStore({
	reducers: {},
	persist: {
		persistKey,
		persistedReducerList,
		persistFilterList,
	},
	logic: {
		list,
		deps,
	}
}) {
	return {
		store: {},
		persistor: {}
	};
}