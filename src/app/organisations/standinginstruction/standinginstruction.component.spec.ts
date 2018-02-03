import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandinginstructionComponent } from './standinginstruction.component';

describe('StandinginstructionComponent', () => {
  let component: StandinginstructionComponent;
  let fixture: ComponentFixture<StandinginstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandinginstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandinginstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
