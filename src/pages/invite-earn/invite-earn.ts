import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the InviteEarnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-invite-earn',
  templateUrl: 'invite-earn.html',
})
export class InviteEarnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteEarnPage');
    
  }
  
  @ViewChild(Content) content: Content;

  private navBgColor: boolean = false;

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

}
