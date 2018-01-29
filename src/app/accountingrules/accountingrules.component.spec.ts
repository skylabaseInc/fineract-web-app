import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingrulesComponent } from './accountingrules.component';

describe('AccountingrulesComponent', () => {
  let component: AccountingrulesComponent;
  let fixture: ComponentFixture<AccountingrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
