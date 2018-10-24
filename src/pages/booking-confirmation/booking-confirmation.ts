import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MealBookingPage } from '../meal-booking/meal-booking';

/**
 * Generated class for the BookingConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-confirmation',
  templateUrl: 'booking-confirmation.html',
})
export class BookingConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingConfirmationPage');
  }

  goBackToHome() {
    this.navCtrl.popToRoot();
  }

  goToMealBookingPage() {
    this.navCtrl.push(MealBookingPage);
  }

}
