import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-cobis';

  constructor(){
    let now = moment();
  }
}

