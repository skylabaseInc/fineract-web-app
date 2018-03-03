import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExternalServiceConfigurationComponent } from './view-external-service-configuration.component';

describe('ViewExternalServiceConfigurationComponent', () => {
  let component: ViewExternalServiceConfigurationComponent;
  let fixture: ComponentFixture<ViewExternalServiceConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExternalServiceConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExternalServiceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
