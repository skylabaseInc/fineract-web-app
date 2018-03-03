import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconfSmsComponent } from './editconf-sms.component';

describe('EditconfSmsComponent', () => {
  let component: EditconfSmsComponent;
  let fixture: ComponentFixture<EditconfSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditconfSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditconfSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
