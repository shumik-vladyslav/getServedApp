import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProceedToPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proceed-to-payment',
  templateUrl: 'proceed-to-payment.html',
})
export class ProceedToPaymentPage {

  private promoCodeToggle: boolean;
  private promoCode: string = ''; //ngModel 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.promoCodeToggle = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProceedToPaymentPage');
  }

  togglePromoCode() {
    this.promoCodeToggle = !this.promoCodeToggle;
  }


}
