import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlecashComponent } from './settlecash.component';

describe('SettlecashComponent', () => {
  let component: SettlecashComponent;
  let fixture: ComponentFixture<SettlecashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlecashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
