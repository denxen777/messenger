import { TRootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

import { messagesFilter } from '../utils/messagesFilter';

const selectMessages = (state: TRootState) => state.messages.messages;

export const titleSelector = (state: TRootState) => state.messages.title;

export const messagesSelector = createSelector(selectMessages, messages => {
  const sortMessages = [...messages].sort(
    (a, b) => a.created_at - b.created_at,
  );
  return messagesFilter(sortMessages);
});
