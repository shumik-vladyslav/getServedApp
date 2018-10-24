import { NgModule } from '@angular/core';
import { RestaurantRecommendationComponent } from './restaurant-recommendation/restaurant-recommendation';
import { CuisineComponent } from './cuisine/cuisine';
import { ShrinkingHeaderComponent } from './shrinking-header/shrinking-header';
import { DropdawnComponent } from './dropdawn/dropdawn';
@NgModule({
	declarations: [RestaurantRecommendationComponent,
    CuisineComponent,
    ShrinkingHeaderComponent,
    DropdawnComponent],
	imports: [],
	exports: [RestaurantRecommendationComponent,
    CuisineComponent,
    ShrinkingHeaderComponent,
    DropdawnComponent]
})
export class ComponentsModule {}
