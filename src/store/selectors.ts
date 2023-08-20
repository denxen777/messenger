import { TRootState } from './store';
import { createSelector } from '@reduxjs/toolkit';
import { dateFilter } from '../utils/dateFilter';

const selectMessages = (state: TRootState) => state.messages.messages;

export const titleSelector = (state: TRootState) => state.messages.title;

export const messagesSelector = createSelector(selectMessages, messages => {
  const sortMessages = messages
    .slice()
    .sort((a, b) => a.created_at - b.created_at);
  return dateFilter(sortMessages);
});
