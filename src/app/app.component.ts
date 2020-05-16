import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddAnimal } from './models/actions/animal.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @Select(state => state.animals) animals$: Observable<any>;

    constructor(protected store: Store) {}
}
