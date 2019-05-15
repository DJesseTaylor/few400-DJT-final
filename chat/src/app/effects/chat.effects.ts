import { Store } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { State } from '../reducers';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as chatActions from '../actions/chat.actions';
import { map, tap } from 'rxjs/operators';
import { ChatEntity } from '../reducers/chat.reducer';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatEffect {

  @Effect({ dispatch: false }) chatSent$ = this.actions$
    .pipe(
      ofType(chatActions.CHAT_SENT),
      map(a => a as chatActions.SentChat),
      map(a => ({ by: a.by, at: a.at, message: a.message }) as ChatEntity),
      map(a => JSON.stringify(a)),
      tap(a => this.socket.emit('chat', a))
    );
  constructor(private actions$: Actions, private socket: Socket, store: Store<State>) {
    socket.fromEvent('chat').subscribe(s => {
      const result: any = JSON.parse(s.toString()) as ChatEntity;
      store.dispatch(new chatActions.ReceivedChat(result));
    });
  }
}
