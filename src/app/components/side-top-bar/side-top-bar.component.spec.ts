import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTopBarComponent } from './side-top-bar.component';

describe('SideTopBarComponent', () => {
  let component: SideTopBarComponent;
  let fixture: ComponentFixture<SideTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
