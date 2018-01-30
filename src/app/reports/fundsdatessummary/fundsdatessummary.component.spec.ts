import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsdatessummaryComponent } from './fundsdatessummary.component';

describe('FundsdatessummaryComponent', () => {
  let component: FundsdatessummaryComponent;
  let fixture: ComponentFixture<FundsdatessummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsdatessummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsdatessummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
