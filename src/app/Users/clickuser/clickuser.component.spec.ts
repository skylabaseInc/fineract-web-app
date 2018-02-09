import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickuserComponent } from './clickuser.component';

describe('ClickuserComponent', () => {
  let component: ClickuserComponent;
  let fixture: ComponentFixture<ClickuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
