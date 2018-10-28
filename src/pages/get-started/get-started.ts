import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the GetStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-started',
  templateUrl: 'get-started.html',
})
export class GetStartedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetStartedPage');
  }

  private socialLoginButton(socialButton: string): void {
    if (socialButton === 'facebook') {
      this.fb.login(['email'])
        .then((res: FacebookLoginResponse) => {
          console.log(res.authResponse.accessToken);
        })
        .catch(e => console.log('Error logging into Facebook', e));
      alert('facebook clicked');
    } else if (socialButton === 'google') {
      alert('google+ clicked');
    } else if (socialButton === 'twitter') {
      alert('twitter clicked');
    }
  }

  private signUpWithEmail(): void {
    // alert ("sign up with email clicked!");
    this.navCtrl.push(SignupPage);
  }

  private goToLogin(): void {
    this.navCtrl.push(LoginPage);
  }

}
