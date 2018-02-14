import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaxgroupComponent } from './createtaxgroup.component';

describe('CreatetaxgroupComponent', () => {
  let component: CreatetaxgroupComponent;
  let fixture: ComponentFixture<CreatetaxgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetaxgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaxgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
