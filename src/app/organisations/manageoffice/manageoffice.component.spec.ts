import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageofficeComponent } from './manageoffice.component';

describe('ManageofficeComponent', () => {
  let component: ManageofficeComponent;
  let fixture: ComponentFixture<ManageofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
