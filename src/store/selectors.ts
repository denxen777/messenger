import { TRootState } from './store';

export const messagesSelector = (state: TRootState) =>
  state.messages.messages.slice().sort((a, b) => a.created_at - b.created_at);

export const titleSelector = (state: TRootState) => state.messages.title;
