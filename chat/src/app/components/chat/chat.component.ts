import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatItem } from './models';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectChatMessages, selectuserName } from '../../reducers';
import { SentChat } from 'src/app/actions/chat.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  chats$: Observable<ChatItem[]>;
  name$: Observable<string>;
  name: string;
  subscription: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.chats$ = this.store.select(selectChatMessages);
    this.name$ = this.store.select(selectuserName);

    this.subscription = this.name$.subscribe(name => this.name = name);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendChat(message: HTMLInputElement) {
    this.store.dispatch(new SentChat(this.name, message.value));
    message.value = '';
    message.focus();
  }

}
