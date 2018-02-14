import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetaxComponent } from './managetax.component';

describe('ManagetaxComponent', () => {
  let component: ManagetaxComponent;
  let fixture: ComponentFixture<ManagetaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
