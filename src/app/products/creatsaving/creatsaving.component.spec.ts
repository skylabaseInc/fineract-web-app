import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatsavingComponent } from './creatsaving.component';

describe('CreatsavingComponent', () => {
  let component: CreatsavingComponent;
  let fixture: ComponentFixture<CreatsavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatsavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatsavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
