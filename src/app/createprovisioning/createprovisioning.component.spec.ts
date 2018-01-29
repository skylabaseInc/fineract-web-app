import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprovisioningComponent } from './createprovisioning.component';

describe('CreateprovisioningComponent', () => {
  let component: CreateprovisioningComponent;
  let fixture: ComponentFixture<CreateprovisioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprovisioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprovisioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
