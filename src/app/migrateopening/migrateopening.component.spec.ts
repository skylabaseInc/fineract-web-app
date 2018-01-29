import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateopeningComponent } from './migrateopening.component';

describe('MigrateopeningComponent', () => {
  let component: MigrateopeningComponent;
  let fixture: ComponentFixture<MigrateopeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateopeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
