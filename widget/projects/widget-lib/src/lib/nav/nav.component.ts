import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from './models';

@Component({
  selector: 'widget-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() links: NavLink[] = [];

  constructor() { }

  ngOnInit() {
  }

}
