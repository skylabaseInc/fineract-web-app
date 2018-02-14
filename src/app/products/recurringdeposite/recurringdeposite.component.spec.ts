import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringdepositeComponent } from './recurringdeposite.component';

describe('RecurringdepositeComponent', () => {
  let component: RecurringdepositeComponent;
  let fixture: ComponentFixture<RecurringdepositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringdepositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringdepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
