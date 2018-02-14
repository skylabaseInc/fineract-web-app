import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsproductsComponent } from './savingsproducts.component';

describe('SavingsproductsComponent', () => {
  let component: SavingsproductsComponent;
  let fixture: ComponentFixture<SavingsproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
