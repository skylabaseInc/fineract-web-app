import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigurationSmsComponent } from './view-configuration-sms.component';

describe('ViewConfigurationSmsComponent', () => {
  let component: ViewConfigurationSmsComponent;
  let fixture: ComponentFixture<ViewConfigurationSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfigurationSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigurationSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
