import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprovisioningcriteriaComponent } from './createprovisioningcriteria.component';

describe('CreateprovisioningcriteriaComponent', () => {
  let component: CreateprovisioningcriteriaComponent;
  let fixture: ComponentFixture<CreateprovisioningcriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprovisioningcriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprovisioningcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
