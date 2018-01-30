import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbrlComponent } from './xbrl.component';

describe('XbrlComponent', () => {
  let component: XbrlComponent;
  let fixture: ComponentFixture<XbrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
