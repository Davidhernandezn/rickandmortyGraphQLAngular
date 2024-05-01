import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteresDetailsComponent } from './characteres-details.component';

describe('CharacteresDetailsComponent', () => {
  let component: CharacteresDetailsComponent;
  let fixture: ComponentFixture<CharacteresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
