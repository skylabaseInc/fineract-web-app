import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehookComponent } from './managehook.component';

describe('ManagehookComponent', () => {
  let component: ManagehookComponent;
  let fixture: ComponentFixture<ManagehookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
