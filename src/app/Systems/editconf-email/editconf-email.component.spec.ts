import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconfEmailComponent } from './editconf-email.component';

describe('EditconfEmailComponent', () => {
  let component: EditconfEmailComponent;
  let fixture: ComponentFixture<EditconfEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditconfEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditconfEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
