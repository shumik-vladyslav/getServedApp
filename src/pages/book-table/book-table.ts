import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingConfirmationPage } from '../booking-confirmation/booking-confirmation';

/**
 * Generated class for the BookTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-table',
  templateUrl: 'book-table.html',
})
export class BookTablePage {


  private bookingTime; //ngModel

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookTablePage');
  }

  goToBookingConfirmationPage() {
    this.navCtrl.push(BookingConfirmationPage);
  }

}
