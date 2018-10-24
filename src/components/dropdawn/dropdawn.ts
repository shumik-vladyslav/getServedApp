import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the DropdawnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dropdawn',
  templateUrl: 'dropdawn.html'
})
export class DropdawnComponent {

  @Input('name') name: string;
  @Input('data') data: object;
  @Output() select = new EventEmitter();

  text: string;

  constructor() {
    console.log('Hello DropdawnComponent Component');
    this.text = 'Hello World';
  }

  cl(name){
    this.select.emit(name);
  }

}
