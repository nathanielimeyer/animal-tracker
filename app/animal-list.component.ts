import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="babyAnimals">Baby Animals</option>
      <option value="adultAnimals">Adult Animals</option>
    </select>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | animalAgeFilter:filterByAge">{{currentAnimal.name}} the {{currentAnimal.species}}
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  filterByAge: string = "allAnimals";
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu
  }
}
