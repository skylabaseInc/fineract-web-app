import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundssummarypentahoComponent } from './fundssummarypentaho.component';

describe('FundssummarypentahoComponent', () => {
  let component: FundssummarypentahoComponent;
  let fixture: ComponentFixture<FundssummarypentahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundssummarypentahoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundssummarypentahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
