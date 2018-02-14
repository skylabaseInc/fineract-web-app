import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcodevalueComponent } from './addcodevalue.component';

describe('AddcodevalueComponent', () => {
  let component: AddcodevalueComponent;
  let fixture: ComponentFixture<AddcodevalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcodevalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcodevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
