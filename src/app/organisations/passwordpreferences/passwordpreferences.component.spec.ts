import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordpreferencesComponent } from './passwordpreferences.component';

describe('PasswordpreferencesComponent', () => {
  let component: PasswordpreferencesComponent;
  let fixture: ComponentFixture<PasswordpreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordpreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordpreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
