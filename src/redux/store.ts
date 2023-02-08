import { configureStore, Action } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
export type RootAction = Action;

export default store;