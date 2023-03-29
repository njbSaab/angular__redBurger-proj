import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output()filterFoods = new EventEmitter<{type: string}>()

  handleFilter(type: string){
      this.filterFoods.emit({type})
  }
}
