import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideogame } from './add-videogame';

describe('AddVideogame', () => {
  let component: AddVideogame;
  let fixture: ComponentFixture<AddVideogame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVideogame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVideogame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
