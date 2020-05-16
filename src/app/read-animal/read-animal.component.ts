import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { Store } from '@ngxs/store';
import { RemoveAnimal } from '../models/actions/animal.actions';

@Component({
  selector: 'app-read-animal',
  templateUrl: './read-animal.component.html',
  styleUrls: ['./read-animal.component.scss']
})
export class ReadAnimalComponent implements OnInit {

    public animals$: Observable<Animal>;

    constructor(protected store: Store) {
        this.animals$ = this.store.select(state => state.animals.animals);
    }

    ngOnInit(): void {
    }

    public removeAnimal(animal: Animal): void {
        this.store.dispatch(new RemoveAnimal(animal));
    }

}
