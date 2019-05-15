import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    NavComponent]
})
export class WidgetLibModule { }
