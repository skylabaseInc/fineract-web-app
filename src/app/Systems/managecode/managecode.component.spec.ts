import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecodeComponent } from './managecode.component';

describe('ManagecodeComponent', () => {
  let component: ManagecodeComponent;
  let fixture: ComponentFixture<ManagecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
