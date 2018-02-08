import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundmappingComponent } from './fundmapping.component';

describe('FundmappingComponent', () => {
  let component: FundmappingComponent;
  let fixture: ComponentFixture<FundmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
