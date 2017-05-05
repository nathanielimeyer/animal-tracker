import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <button *ngIf="!showForm" (click)="showFormButtonClicked()">Add a new animal</button>
    <div *ngIf="showForm">
      <h1>New Animal</h1>
      <div>
        <label>Enter animal species:</label>
        <input #newSpecies>
      </div>
      <div>
        <label>Enter animal name:</label>
        <input #newName>
      </div>
      <div>
        <label>Enter animal age:</label>
        <input #newAge>
      </div>
      <div>
        <label>Enter animal diet:</label>
        <input #newDiet>
      </div>
      <div>
        <label>Enter animal location:</label>
        <input #newLocation>
      </div>
      <div>
        <label>Enter animal caretakers:</label>
        <input #newCaretakers>
      </div>
      <div>
        <label>Enter animal sex:</label>
        <input #newSex>
      </div>
      <div>
        <label>Enter animal likes:</label>
        <input #newLikes>
      </div>
      <div>
        <label>Enter animal dislikes:</label>
        <input #newDislikes>
      </div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  showForm: boolean = false;
  @Output() newAnimalSender = new EventEmitter();

  showFormButtonClicked() {
    this.showForm = true;
  }

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.showForm = false;
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
