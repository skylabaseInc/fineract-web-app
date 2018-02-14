import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpreferenceComponent } from './addpreference.component';

describe('AddpreferenceComponent', () => {
  let component: AddpreferenceComponent;
  let fixture: ComponentFixture<AddpreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
