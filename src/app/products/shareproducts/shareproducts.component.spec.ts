import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareproductsComponent } from './shareproducts.component';

describe('ShareproductsComponent', () => {
  let component: ShareproductsComponent;
  let fixture: ComponentFixture<ShareproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
