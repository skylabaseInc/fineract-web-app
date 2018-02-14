import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanproductsComponent } from './loanproducts.component';

describe('LoanproductsComponent', () => {
  let component: LoanproductsComponent;
  let fixture: ComponentFixture<LoanproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
