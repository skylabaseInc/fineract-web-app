import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundssummaryofficepentahoComponent } from './fundssummaryofficepentaho.component';

describe('FundssummaryofficepentahoComponent', () => {
  let component: FundssummaryofficepentahoComponent;
  let fixture: ComponentFixture<FundssummaryofficepentahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundssummaryofficepentahoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundssummaryofficepentahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
