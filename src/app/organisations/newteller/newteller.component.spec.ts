import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtellerComponent } from './newteller.component';

describe('NewtellerComponent', () => {
  let component: NewtellerComponent;
  let fixture: ComponentFixture<NewtellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
