import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private passwordHidden: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  togglePassword() {
    this.passwordHidden = !this.passwordHidden;
  }

  goToLoginPage() {
    let index = this.viewCtrl.index;

    this.navCtrl.push(LoginPage, {}, { animate: false }).then(() => {
      this.navCtrl.remove(index);
    });

  }

}
