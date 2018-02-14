import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmixComponent } from './addmix.component';

describe('AddmixComponent', () => {
  let component: AddmixComponent;
  let fixture: ComponentFixture<AddmixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
