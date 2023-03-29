import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FiltersComponent } from './filters/filters.component';
import { SerchComponent } from './serch/serch.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    FoodItemComponent,
    FiltersComponent,
    SerchComponent
  ],
  exports: [
    FiltersComponent

  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
  ]
})
export class HomeModule { }
