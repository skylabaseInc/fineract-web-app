import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialactivityComponent } from './financialactivity.component';

describe('FinancialactivityComponent', () => {
  let component: FinancialactivityComponent;
  let fixture: ComponentFixture<FinancialactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
