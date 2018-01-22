import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountclosureComponent } from './accountclosure.component';

describe('AccountclosureComponent', () => {
  let component: AccountclosureComponent;
  let fixture: ComponentFixture<AccountclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
