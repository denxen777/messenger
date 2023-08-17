import { TRootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

const selectMessages = (state: TRootState) => state.messages.messages;

export const titleSelector = (state: TRootState) => state.messages.title;

export const messagesSelector = createSelector(selectMessages, messages => {
  return messages.slice().sort((a, b) => a.created_at - b.created_at);
});
