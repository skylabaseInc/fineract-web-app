import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunclientlistpentahoComponent } from './runclientlistpentaho.component';

describe('RunclientlistpentahoComponent', () => {
  let component: RunclientlistpentahoComponent;
  let fixture: ComponentFixture<RunclientlistpentahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunclientlistpentahoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunclientlistpentahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
