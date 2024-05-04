import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteresCardComponent } from './characteres-card.component';

describe('CharacteresCardComponent', () => {
  let component: CharacteresCardComponent;
  let fixture: ComponentFixture<CharacteresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteresCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
