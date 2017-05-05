import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
        <label>Enter animal species:</label>
        <input [(ngModel)]="childSelectedAnimal.species">
        <label>Enter animal name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <label>Enter animal age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">
        <label>Enter animal diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet">
        <label>Enter animal location:</label>
        <input [(ngModel)]="childSelectedAnimal.location">
        <label>Enter animal caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">
        <label>Enter animal sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
        <label>Enter animal likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes">
        <label>Enter animal dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
