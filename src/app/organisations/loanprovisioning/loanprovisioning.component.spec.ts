import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanprovisioningComponent } from './loanprovisioning.component';

describe('LoanprovisioningComponent', () => {
  let component: LoanprovisioningComponent;
  let fixture: ComponentFixture<LoanprovisioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanprovisioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanprovisioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
