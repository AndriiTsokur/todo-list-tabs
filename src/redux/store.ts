import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modalSlice';
import { tasksReducer } from './tasksSlice';

const tasksPersistConfig = {
	key: 'tasks',
	storage,
	whitelist: ['tasksState'],
};

const persistedReducer = persistReducer(tasksPersistConfig, tasksReducer);

const reducers = combineReducers({
	tasks: persistedReducer,
	modal: modalReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
