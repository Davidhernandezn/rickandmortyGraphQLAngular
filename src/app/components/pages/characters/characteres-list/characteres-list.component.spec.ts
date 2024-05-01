import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteresListComponent } from './characteres-list.component';

describe('CharacteresListComponent', () => {
  let component: CharacteresListComponent;
  let fixture: ComponentFixture<CharacteresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
