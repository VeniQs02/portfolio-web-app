import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlippingCardsComponent } from './flipping-cards.component';

describe('FlippingCardsComponent', () => {
  let component: FlippingCardsComponent;
  let fixture: ComponentFixture<FlippingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlippingCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlippingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
