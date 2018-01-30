import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingstransactionsComponent } from './savingstransactions.component';

describe('SavingstransactionsComponent', () => {
  let component: SavingstransactionsComponent;
  let fixture: ComponentFixture<SavingstransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingstransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingstransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
