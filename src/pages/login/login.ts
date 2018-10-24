import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private authProvider: AuthProvider, public modalCtrl: ModalController) {
  }

  blur = false;

  presentForgotPassPage() {
    this.blur = true;
    
    let profileModal = this.modalCtrl.create(ForgotPassPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.blur = false;
    });
    profileModal.present();


  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignUpPage() {
    let index = this.viewCtrl.index;
    // console.log(index);
    this.navCtrl.push(SignupPage, {}, {animate: false}).then(()=> {
      this.navCtrl.remove(index);
    });
    
  }

  fakeLogin() {
    this.authProvider.setLoginStatus(true);
  }

}

