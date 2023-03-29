import {Component, OnInit} from '@angular/core';
import {IFood} from "../../../services/product/food.interface";
import {FoodService} from "../../../services/product/food.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods:IFood[] = []
  filteredFoods:IFood[] = []
  constructor(private  foodService: FoodService) {

  }
  ngOnInit(): void {
    this.foodService.getAll().subscribe(data => {
      this.foods = data
      this.filteredFoods = data
    })

  }

  onSearch(eventData: {searchTerm: string}){
     this.filteredFoods = this.foods.filter(food => food.title.toLowerCase().includes(eventData.searchTerm.toLowerCase()))
  }
  onFilter(eventData: {type: string}){
    this.filteredFoods = this.foods.filter(food => food.type == eventData.type)
  }
}
