import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinancialactivityComponent } from './addfinancialactivity.component';

describe('AddfinancialactivityComponent', () => {
  let component: AddfinancialactivityComponent;
  let fixture: ComponentFixture<AddfinancialactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfinancialactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfinancialactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
