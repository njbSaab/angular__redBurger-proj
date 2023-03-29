import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFood} from "../../../../services/product/food.interface";

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent {
  @Input()foods: IFood[]
  @Output()findFoods = new EventEmitter<{searchTerm: string}>()
  searchTerm = ""

  handleSearch(e:KeyboardEvent){
    if(e.key === 'Enter'){
      this.findFoods.emit({searchTerm: this.searchTerm})
    }

  }
  constructor() {

  }
}
