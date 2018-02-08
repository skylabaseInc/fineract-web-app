import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatecashComponent } from './allocatecash.component';

describe('AllocatecashComponent', () => {
  let component: AllocatecashComponent;
  let fixture: ComponentFixture<AllocatecashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatecashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
