import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProceedToPaymentPage } from '../proceed-to-payment/proceed-to-payment';

/**
 * Generated class for the MealBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meal-booking',
  templateUrl: 'meal-booking.html',
})
export class MealBookingPage {

  private list = [
    {
      title: 'Pizzas',
      img: './assets/imgs/H1.png',
      variety: [
        {
          title: 'Mushroom Pizza',
          price: '450',
          sizes: [ {name: 'Large'}, {name: 'Medium'}, {name: 'Small'}],
          img: './assets/imgs/H1.png',
          quantity: 0
        }
      ]
    },
    {
      title: 'Burger',
      img: './assets/imgs/H1.png',
      variety: [
        {
          title: 'Mushroom Burger',
          price: '450',
          sizes: ['Large', 'Medium', 'Small'],
          img: './assets/imgs/H1.png',
          quantity: 0
        }
      ]
    }
  ];

  private dropdown: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealBookingPage');
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
  goToProceedToPaymentPage() {
    this.navCtrl.push(ProceedToPaymentPage);
  }
}
