import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsaccountingComponent } from './reportsaccounting.component';

describe('ReportsaccountingComponent', () => {
  let component: ReportsaccountingComponent;
  let fixture: ComponentFixture<ReportsaccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsaccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsaccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
