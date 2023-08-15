import { configureStore } from '@reduxjs/toolkit';
import messages from './messages';

export const store = configureStore({
  reducer: {
    messages,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
