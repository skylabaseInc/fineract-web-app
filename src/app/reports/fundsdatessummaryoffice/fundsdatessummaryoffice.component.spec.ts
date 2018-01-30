import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsdatessummaryofficeComponent } from './fundsdatessummaryoffice.component';

describe('FundsdatessummaryofficeComponent', () => {
  let component: FundsdatessummaryofficeComponent;
  let fixture: ComponentFixture<FundsdatessummaryofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsdatessummaryofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsdatessummaryofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
