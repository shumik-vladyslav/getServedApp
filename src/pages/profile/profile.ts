import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { InviteEarnPage } from '../invite-earn/invite-earn';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private greeting:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {

    let d = new Date();
    let h = d.getHours();

    if (h < 12) {
      this.greeting = 'Good Morning';
    } else if (h < 16) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  fakeLogout() {
    this.authProvider.setLoginStatus(false);
  }

  goToInviteEarnPage() {
    this.navCtrl.push(InviteEarnPage);
  }

}
