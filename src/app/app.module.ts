import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetStartedPage } from '../pages/get-started/get-started';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MapPage } from '../pages/map/map';
import { CartPage } from '../pages/cart/cart';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { SearchFilterPipe } from '../pipes/search-filter/search-filter';
import { LocationSearchPage } from '../pages/location-search/location-search';
import { RestaurantRecommendationComponent } from '../components/restaurant-recommendation/restaurant-recommendation';
import { CuisineComponent } from '../components/cuisine/cuisine';
import { ViewRestaurantPage } from '../pages/view-restaurant/view-restaurant';
import { ShrinkingHeaderComponent } from '../components/shrinking-header/shrinking-header';
import { BookTablePage } from '../pages/book-table/book-table';
import { BookingConfirmationPage } from '../pages/booking-confirmation/booking-confirmation';
import { ProceedToPaymentPage } from '../pages/proceed-to-payment/proceed-to-payment';
import { MealBookingPage } from '../pages/meal-booking/meal-booking';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { DropdawnComponent } from '../components/dropdawn/dropdawn';
import { RestaurantListPage } from '../pages/restaurant-list/restaurant-list';
import { InviteEarnPage } from '../pages/invite-earn/invite-earn';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GetStartedPage,
    LoginPage,
    SignupPage,
    MapPage,
    CartPage,
    ProfilePage,
    SearchPage,
    SearchFilterPipe,
    LocationSearchPage,
    RestaurantRecommendationComponent,
    CuisineComponent,
    ViewRestaurantPage,
    ShrinkingHeaderComponent,
    BookTablePage,
    BookingConfirmationPage,
    ProceedToPaymentPage,
    MealBookingPage,
    ForgotPassPage,
    DropdawnComponent,
    RestaurantListPage,
    InviteEarnPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    } ),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GetStartedPage,
    LoginPage,
    SignupPage,
    MapPage,
    CartPage,
    ProfilePage,
    SearchPage,
    LocationSearchPage,
    ViewRestaurantPage,
    BookTablePage,
    BookingConfirmationPage,
    ProceedToPaymentPage,
    MealBookingPage,
    ForgotPassPage,
    DropdawnComponent,
    RestaurantListPage,
    InviteEarnPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
