import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = CartPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
