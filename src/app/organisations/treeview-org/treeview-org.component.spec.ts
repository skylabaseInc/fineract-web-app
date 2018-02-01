import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewOrgComponent } from './treeview-org.component';

describe('TreeviewOrgComponent', () => {
  let component: TreeviewOrgComponent;
  let fixture: ComponentFixture<TreeviewOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeviewOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
