import { Component, Input } from '@angular/core';

/**
 * Generated class for the CuisineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cuisine',
  templateUrl: 'cuisine.html'
})
export class CuisineComponent {

  @Input('data') data:any;

  constructor() {
    console.log('Hello CuisineComponent Component');
    
  }

}
