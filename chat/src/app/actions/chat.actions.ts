import { Action } from '@ngrx/store';
import { ChatEntity } from '../reducers/chat.reducer';

export const CHAT_SENT = '[chat] chat sent';
export class SentChat implements Action {
  readonly type = CHAT_SENT;
  at: string;
  constructor(public by: string, public message: string) {
    this.at = new Date().toISOString();
  }
}

export const CHAT_RECEIVED = '[chat] chat received';
export class ReceivedChat implements Action {
  readonly type = CHAT_RECEIVED;
  constructor(public item: ChatEntity) { }
}


export type All =
  SentChat
  | ReceivedChat;
