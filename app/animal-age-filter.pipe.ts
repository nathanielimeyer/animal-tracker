import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "animalAgeFilter",
  pure: false
})

export class AnimalAgeFilter implements PipeTransform {
  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === "babyAnimals") {
      for (var i=0; i<input.length; i++) {
        if(input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "adultAnimals") {
      for (var i=0; i<input.length; i++) {
        if(input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
