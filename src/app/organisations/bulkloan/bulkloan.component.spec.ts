import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkloanComponent } from './bulkloan.component';

describe('BulkloanComponent', () => {
  let component: BulkloanComponent;
  let fixture: ComponentFixture<BulkloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
