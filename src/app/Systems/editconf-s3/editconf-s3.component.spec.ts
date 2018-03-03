import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconfS3Component } from './editconf-s3.component';

describe('EditconfS3Component', () => {
  let component: EditconfS3Component;
  let fixture: ComponentFixture<EditconfS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditconfS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditconfS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
