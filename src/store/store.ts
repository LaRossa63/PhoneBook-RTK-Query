import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getContent } from 'api';

const rootReducer = combineReducers({
  [getContent.reducerPath]: getContent.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getContent.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
