import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefloatingratesComponent } from './createfloatingrates.component';

describe('CreatefloatingratesComponent', () => {
  let component: CreatefloatingratesComponent;
  let fixture: ComponentFixture<CreatefloatingratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefloatingratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefloatingratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
