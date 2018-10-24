import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { LocationSearchPage } from '../location-search/location-search';
import { ViewRestaurantPage } from '../view-restaurant/view-restaurant';
import { RestaurantListPage } from '../restaurant-list/restaurant-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private time = "10:30";
  
  year;
  day;
  month;

  dayData = [];
  monthData = [{ name: 'January' }, { name: 'February' }, { name: 'March' },
  { name: 'April' }, { name: 'May' }, { name: 'June' }, { name: 'July' }, { name: 'August' },
  { name: 'September' }, { name: 'October' }, { name: 'November' }, { name: 'December' }];
  yearData = [{ name: '2018' }, { name: '2019' }];

  mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  private cuisines = [
    {
      img: './assets/imgs/H1.png',
      name: 'Continental',
      restaurantCount: '10'
    },
    {
      img: './assets/imgs/H2.png',
      name: 'Chinese',
      restaurantCount: '05'
    },
    {
      img: './assets/imgs/H3.png',
      name: 'South Indian',
      restaurantCount: '08'
    },
    {
      img: './assets/imgs/H1.png',
      name: 'Continental',
      restaurantCount: '10'
    },
    {
      img: './assets/imgs/H2.png',
      name: 'Chinese',
      restaurantCount: '05'
    },
    {
      img: './assets/imgs/H3.png',
      name: 'South Indian',
      restaurantCount: '08'
    },
  ];

  constructor(public navCtrl: NavController) {
    this.dateInit()
  }

  goToSearchPage() {
    this.navCtrl.push(SearchPage, {}, {animate: false});
  }

  goToRestaurantList() {
    this.navCtrl.push(RestaurantListPage, {}, {animate: false});
  }

  goToLocationSearchPage() {
    this.navCtrl.push(LocationSearchPage, {}, {animate: false});
  }

  openRestaurantDetails() {
    this.navCtrl.push(ViewRestaurantPage);
  }

  dateInit() {
    for (let i = 1; i <= 31; i++) {
      this.dayData.push({ name: i })
    }
  }

}
