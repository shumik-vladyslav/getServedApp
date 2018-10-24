import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { trigger, transition, style, keyframes, animate } from '@angular/animations';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  animations: [
    trigger('list', [
      transition(':enter', [
        animate('0.8s', keyframes([
          style({transform: 'translateY(100%)', opacity: 0, offset: 0}),
          style({transform: 'translateY(0%)', opacity: 0.5, offset: 0.5}),
          style({opacity: 1, offset: 1}),
        ]))
      ]),
      transition(':leave', [
        animate('0.8s', keyframes([
          style({transform: 'translateY(0%)', opacity: 0.5, offset: 0}),
          style({transform: 'translateY(100%)', opacity: 0, offset: 1}),
        ]))
      ]),
    ])
  ]
})
export class SearchPage {

  @ViewChild(Navbar) navBar:Navbar;

  @ViewChild('searchBar') searchbar:any;

  private query: string = '';  //ngModel in searchbar

  private restaurants: Array<string> = ['Indian Villa', 'Kaser Da Dhaba', 'Bharwa Da Dhaba'];

  private dishes: Array<string> = ['Pizza', 'Burger', 'Kulcha', 'Masala Dosa'];

  private cuisine: Array<string> = ['Continental', 'Chinese', 'South Indian'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  ngAfterViewInit() {
    let interval = setInterval(()=> {

      if (this.searchbar !== undefined) {        
        this.searchbar.setFocus();
        clearInterval(interval);
      }

    }, 100);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.navBar.backButtonClick = (e:UIEvent) => {
      this.navCtrl.pop({animate: false});
      // this.navCtrl.push(HomePage,{ product: prod }, {animate:true,animation:‘transition’, direction:‘left’});
    };
  }

}
