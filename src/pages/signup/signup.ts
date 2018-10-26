import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

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
  myForm: FormGroup;
  customeValidator;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController, public navParams: NavParams, private formBuilder: FormBuilder, public viewCtrl: ViewController, private http: HttpClient) {
    this.myForm = formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*){4}$")]],
      terms: [this.terms === true],
    });

  }

  terms = true;

  dataUser = {
    fullName: '',
    email: '',
    password: '',
    pincode: '',
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

  toDoSignUp() {

    let user = this.dataUser;

    if (this.myForm.valid && this.terms === true) {

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();

      this.auth.signUp(user).subscribe((data: any) => {
       
        if(data.status === 'OK'){
          loading.dismiss();
          this.navCtrl.push(LoginPage, {}, {animate: false});
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error reristration',
            subTitle: 'Please try another email',
            buttons: ['Ok']
          });
          alert.present();
          loading.dismiss();
        }
      
        console.log(data)

       });
      
    } else {
      this.customeValidator = false;
    }

  }

}
