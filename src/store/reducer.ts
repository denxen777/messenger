import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessagesState } from './interfaces';
import { IMessageData } from '../api/interfaces';

const initialState: IMessagesState = {
  messages: [],
  title: '',
};

const reducer = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: (
      state,
      action: PayloadAction<{ title: string; messages: IMessageData[] }>,
    ) => {
      const { title, messages } = action.payload;
      state.title = title;
      state.messages = messages;
    },
  },
});

export default reducer.reducer;

export const { addMessages } = reducer.actions;
