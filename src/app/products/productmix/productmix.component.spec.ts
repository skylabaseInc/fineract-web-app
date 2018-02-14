import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmixComponent } from './productmix.component';

describe('ProductmixComponent', () => {
  let component: ProductmixComponent;
  let fixture: ComponentFixture<ProductmixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
