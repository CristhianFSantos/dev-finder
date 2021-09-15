import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserDetailsComponent } from './card-user-details.component';

describe('CardUserDetailsComponent', () => {
  let component: CardUserDetailsComponent;
  let fixture: ComponentFixture<CardUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
