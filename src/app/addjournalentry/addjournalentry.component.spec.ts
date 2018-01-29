import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjournalentryComponent } from './addjournalentry.component';

describe('AddjournalentryComponent', () => {
  let component: AddjournalentryComponent;
  let fixture: ComponentFixture<AddjournalentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjournalentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjournalentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
