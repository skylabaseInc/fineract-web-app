import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcashierComponent } from './newcashier.component';

describe('NewcashierComponent', () => {
  let component: NewcashierComponent;
  let fixture: ComponentFixture<NewcashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcashierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
