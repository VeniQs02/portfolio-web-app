import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutMeComponent } from './more-about-me.component';

describe('MoreAboutMeComponent', () => {
  let component: MoreAboutMeComponent;
  let fixture: ComponentFixture<MoreAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
