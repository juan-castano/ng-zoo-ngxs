import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from '../models/actions/animal.actions';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  constructor(protected store: Store) { }

  ngOnInit(): void {
  }

  public addAnimal(animalName: string): void {
    this.store.dispatch(new AddAnimal({
      id: (Math.random().toString(36) + '000').slice(2),
      name: animalName
    }));
  }

}
