import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { LocationSearchPage } from '../location-search/location-search';

/**
 * Generated class for the RestaurantListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSearchPage() {
    this.navCtrl.push(SearchPage, {}, { animate: false });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantListPage');
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'flex';
      });
    }
  }

  goToLocationSearchPage() {
    this.navCtrl.push(LocationSearchPage, {}, {animate: false});
  }
  
  pop() {
    this.navCtrl.popToRoot();
  }

}
