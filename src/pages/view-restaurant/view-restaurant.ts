import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { BookTablePage } from '../book-table/book-table';

/**
 * Generated class for the ViewRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-restaurant',
  templateUrl: 'view-restaurant.html',
})
export class ViewRestaurantPage {

  @ViewChild(Content) content: Content;

  private navBgColor: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone) {
    // setTimeout(()=> {
    //   this.navBgColor = 'linear-gradient(#17c95f, #1d7746)';
    // }, 10000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRestaurantPage');
  }

  headerHeightChange(height) {
    console.log('height emit ', height);
    this.zone.run(()=>{
      if (parseInt(height) < 15) {
        // this.navBgColor = 'linear-gradient(#17c95f, #1d7746) !important';
        this.navBgColor = true;
        console.log('inside if  ', this.navBgColor);
      } else {
        this.navBgColor = false;
      }
    });
    
  }

  goToBookTablePage() {
    this.navCtrl.push(BookTablePage);
  }

}
