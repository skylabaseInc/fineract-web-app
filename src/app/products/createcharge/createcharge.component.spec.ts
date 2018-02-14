import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechargeComponent } from './createcharge.component';

describe('CreatechargeComponent', () => {
  let component: CreatechargeComponent;
  let fixture: ComponentFixture<CreatechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
