import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeddepositeproductsComponent } from './fixeddepositeproducts.component';

describe('FixeddepositeproductsComponent', () => {
  let component: FixeddepositeproductsComponent;
  let fixture: ComponentFixture<FixeddepositeproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixeddepositeproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixeddepositeproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
