import { Component, Input, OnInit } from '@angular/core';

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
export class RestaurantRecommendationComponent implements OnInit{

  text: string;

   @Input() data;
    
   dataRate = [
     {value: true},
     {value: true},
     {value: true},
     {value: true},
     {value: true}
   ]
  constructor() {
    console.log('Hello RestaurantRecommendationComponent Component', this.data);
    this.text = 'Hello World';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('stars', this.data);
    for (let i = 1; i <= 5; i++){
      if(this.data.rating > i){
        this.dataRate[i - 1].value = true;
      } else {
        this.dataRate[i - 1].value = false;
      }
    }
  }
  
}
