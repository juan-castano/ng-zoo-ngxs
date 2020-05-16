import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAnimalComponent } from './read-animal.component';

describe('ReadAnimalComponent', () => {
  let component: ReadAnimalComponent;
  let fixture: ComponentFixture<ReadAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
