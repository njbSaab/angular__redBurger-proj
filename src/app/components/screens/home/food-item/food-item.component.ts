import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {IFood} from "../../../../services/product/food.interface";

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {

  @Input() food : IFood
}
