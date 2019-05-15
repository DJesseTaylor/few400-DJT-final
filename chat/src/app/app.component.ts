import { Component } from '@angular/core';
import { NavLink } from 'widget-lib/lib/nav/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';

  links: NavLink[] = [
    { path: 'home', label: 'Home' },
    { path: 'chat', label: 'Chat' }
  ];
}
