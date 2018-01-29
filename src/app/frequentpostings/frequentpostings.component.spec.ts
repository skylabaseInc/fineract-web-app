import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentpostingsComponent } from './frequentpostings.component';

describe('FrequentpostingsComponent', () => {
  let component: FrequentpostingsComponent;
  let fixture: ComponentFixture<FrequentpostingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentpostingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentpostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
