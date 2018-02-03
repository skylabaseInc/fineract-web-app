import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunclientloanComponent } from './runclientloan.component';

describe('RunclientloanComponent', () => {
  let component: RunclientloanComponent;
  let fixture: ComponentFixture<RunclientloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunclientloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunclientloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
