import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickmanagecodeComponent } from './clickmanagecode.component';

describe('ClickmanagecodeComponent', () => {
  let component: ClickmanagecodeComponent;
  let fixture: ComponentFixture<ClickmanagecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickmanagecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickmanagecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
