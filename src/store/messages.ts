import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessagesState } from './interfaces';
import { IMessageData } from '../api/interfaces';

const initialState: IMessagesState = {
  messages: [],
  title: '',
};

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    createMessages: (
      state,
      action: PayloadAction<{ title: string; messages: IMessageData[] }>,
    ) => {
      const { title, messages } = action.payload;
      state.title = title;
      state.messages = messages;
    },
  },
});

export default messages.reducer;

export const { createMessages } = messages.actions;
