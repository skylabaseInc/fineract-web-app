import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterecurringdepositeComponent } from './createrecurringdeposite.component';

describe('CreaterecurringdepositeComponent', () => {
  let component: CreaterecurringdepositeComponent;
  let fixture: ComponentFixture<CreaterecurringdepositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterecurringdepositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterecurringdepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
