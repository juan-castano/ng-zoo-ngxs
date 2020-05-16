import { Injectable } from '@angular/core';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Animal } from '../animal.model';
import { AddAnimal, RemoveAnimal } from '../actions/animal.actions';

export class AnimalStateModel {
    animals: Animal[];
}

@State<AnimalStateModel>({
    name: 'animals',
    defaults: {
        animals: []
    }
})
@Injectable()
export class AnimalState {

    @Selector()
    static getAnimals(state: AnimalStateModel): Animal[] {
        return state.animals;
    }

    @Action(AddAnimal)
    public add({getState, patchState}: StateContext<AnimalStateModel>, {animal}: AddAnimal): void {
        const state = getState();
        patchState({
            animals: [...state.animals, animal]
        });
    }

    @Action(RemoveAnimal)
    public remove({getState, patchState}: StateContext<AnimalStateModel>, {animal}: RemoveAnimal): void {
        patchState({
            animals: getState().animals.filter(value => value.id !== animal.id)
        });
    }
}
