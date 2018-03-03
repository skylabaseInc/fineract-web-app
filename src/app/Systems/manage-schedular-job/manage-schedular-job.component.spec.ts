import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSchedularJobComponent } from './manage-schedular-job.component';

describe('ManageSchedularJobComponent', () => {
  let component: ManageSchedularJobComponent;
  let fixture: ComponentFixture<ManageSchedularJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSchedularJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSchedularJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
