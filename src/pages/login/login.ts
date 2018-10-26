import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
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

  myForm: FormGroup;
  customeValidator;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private formBuilder: FormBuilder, private http: HttpClient, public navParams: NavParams, public viewCtrl: ViewController, private authProvider: AuthProvider, public modalCtrl: ModalController) {
    this.myForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  blur = false;

  dataUser = {
    email: '',
    password: '',
  }

  presentForgotPassPage() {
    this.blur = true;

    let profileModal = this.modalCtrl.create(ForgotPassPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.blur = false;
    });
    profileModal.present();


  }

  toDoSignIn() {

    let user = this.dataUser;

    if (this.myForm.valid) {

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();

      this.auth.signIn(user).subscribe((data: any) => {
        if(data.status === 'OK'){
          loading.dismiss();
          this.authProvider.setLoginStatus(true);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error login!',
            subTitle: 'This Email is not registered',
            buttons: ['Ok']
          });
          alert.present();
          loading.dismiss();
        }
       });

    } else {
      this.customeValidator = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignUpPage() {
    let index = this.viewCtrl.index;
    // console.log(index);
    this.navCtrl.push(SignupPage, {}, { animate: false }).then(() => {
      this.navCtrl.remove(index);
    });

  }

  // fakeLogin() {
  //   this.authProvider.setLoginStatus(true);
  // }

}

