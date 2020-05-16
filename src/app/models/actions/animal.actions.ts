import { Animal } from '../animal.model';

export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(public animal: Animal) {}
}

export class RemoveAnimal {
    static readonly type = '[Zoo] Remove Animal';
    constructor(public animal: Animal) {}
}
export class FetchAllAnimals {
    static readonly type = '[Zoo] Fetch All Animals';
}
