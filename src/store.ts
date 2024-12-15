import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './features/session/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
