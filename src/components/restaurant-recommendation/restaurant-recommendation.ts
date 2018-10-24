import { Component } from '@angular/core';

/**
 * Generated class for the RestaurantRecommendationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restaurant-recommendation',
  templateUrl: 'restaurant-recommendation.html'
})
export class RestaurantRecommendationComponent {

  text: string;

  constructor() {
    console.log('Hello RestaurantRecommendationComponent Component');
    this.text = 'Hello World';
  }

}
