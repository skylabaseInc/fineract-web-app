import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateloanproductComponent } from './createloanproduct.component';

describe('CreateloanproductComponent', () => {
  let component: CreateloanproductComponent;
  let fixture: ComponentFixture<CreateloanproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateloanproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateloanproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
