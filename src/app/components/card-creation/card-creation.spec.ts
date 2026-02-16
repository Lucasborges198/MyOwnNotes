import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreation } from './card-creation';

describe('CardCreation', () => {
  let component: CardCreation;
  let fixture: ComponentFixture<CardCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
