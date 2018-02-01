import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateofficeComponent } from './createoffice.component';

describe('CreateofficeComponent', () => {
  let component: CreateofficeComponent;
  let fixture: ComponentFixture<CreateofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
