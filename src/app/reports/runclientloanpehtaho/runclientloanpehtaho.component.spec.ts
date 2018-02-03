import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunclientloanpehtahoComponent } from './runclientloanpehtaho.component';

describe('RunclientloanpehtahoComponent', () => {
  let component: RunclientloanpehtahoComponent;
  let fixture: ComponentFixture<RunclientloanpehtahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunclientloanpehtahoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunclientloanpehtahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
