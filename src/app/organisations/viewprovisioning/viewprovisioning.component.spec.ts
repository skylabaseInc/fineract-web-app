import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprovisioningComponent } from './viewprovisioning.component';

describe('ViewprovisioningComponent', () => {
  let component: ViewprovisioningComponent;
  let fixture: ComponentFixture<ViewprovisioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprovisioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprovisioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
