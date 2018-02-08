import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprovisioningDialogComponent } from './deleteprovisioning-dialog.component';

describe('DeleteprovisioningDialogComponent', () => {
  let component: DeleteprovisioningDialogComponent;
  let fixture: ComponentFixture<DeleteprovisioningDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteprovisioningDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprovisioningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
