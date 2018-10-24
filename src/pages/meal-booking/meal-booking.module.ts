import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealBookingPage } from './meal-booking';

@NgModule({
  declarations: [
    MealBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(MealBookingPage),
  ],
})
export class MealBookingPageModule {}
