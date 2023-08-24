import { configureStore } from '@reduxjs/toolkit';
import messages from './reducer';

export const store = configureStore({
  reducer: {
    messages,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
