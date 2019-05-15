import { Component } from '@angular/core';
import { NavLink } from 'widget-lib/lib/nav/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'widget-tester';
  links: NavLink[] = [
    { path: 'tacos', label: 'Good' },
    { path: 'store', label: 'Store' }
  ];
}
