import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunclientlistComponent } from './runclientlist.component';

describe('RunclientlistComponent', () => {
  let component: RunclientlistComponent;
  let fixture: ComponentFixture<RunclientlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunclientlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunclientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
