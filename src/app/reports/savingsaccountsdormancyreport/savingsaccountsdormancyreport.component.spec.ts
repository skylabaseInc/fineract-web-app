import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsaccountsdormancyreportComponent } from './savingsaccountsdormancyreport.component';

describe('SavingsaccountsdormancyreportComponent', () => {
  let component: SavingsaccountsdormancyreportComponent;
  let fixture: ComponentFixture<SavingsaccountsdormancyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsaccountsdormancyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsaccountsdormancyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
