import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisioningentryComponent } from './provisioningentry.component';

describe('ProvisioningentryComponent', () => {
  let component: ProvisioningentryComponent;
  let fixture: ComponentFixture<ProvisioningentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisioningentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisioningentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
