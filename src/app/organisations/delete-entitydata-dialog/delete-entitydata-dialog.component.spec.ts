import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEntitydataDialogComponent } from './delete-entitydata-dialog.component';

describe('DeleteEntitydataDialogComponent', () => {
  let component: DeleteEntitydataDialogComponent;
  let fixture: ComponentFixture<DeleteEntitydataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEntitydataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEntitydataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
