import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api.ts';

const reducers = combineReducers({
    [api.reducerPath]: api.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
