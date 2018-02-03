import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralledgerreportComponent } from './generalledgerreport.component';

describe('GeneralledgerreportComponent', () => {
  let component: GeneralledgerreportComponent;
  let fixture: ComponentFixture<GeneralledgerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralledgerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralledgerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
