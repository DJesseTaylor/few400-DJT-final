import * as fromAuth from './auth.reducer';
import * as fromChat from './chat.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  auth: fromAuth.State;
  chat: fromChat.State;
}

export const reducers = {
  auth: fromAuth.reducer,
  chat: fromChat.reducer
};

export const _selectAuth = (state: State) => state.auth;

export const _selectChat = (state: State) => state.chat;

export const selectChatMessages = createSelector(_selectChat, c => c.messages);
export const selectuserName = createSelector(_selectAuth, u => u.userName);

