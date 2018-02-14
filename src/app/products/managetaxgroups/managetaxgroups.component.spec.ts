import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetaxgroupsComponent } from './managetaxgroups.component';

describe('ManagetaxgroupsComponent', () => {
  let component: ManagetaxgroupsComponent;
  let fixture: ComponentFixture<ManagetaxgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetaxgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetaxgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
