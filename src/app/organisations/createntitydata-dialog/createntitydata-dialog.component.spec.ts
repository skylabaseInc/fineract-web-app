import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatentitydataDialogComponent } from './createntitydata-dialog.component';

describe('CreatentitydataDialogComponent', () => {
  let component: CreatentitydataDialogComponent;
  let fixture: ComponentFixture<CreatentitydataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatentitydataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatentitydataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
