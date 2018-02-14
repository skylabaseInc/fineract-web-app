import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaxcomponentComponent } from './createtaxcomponent.component';

describe('CreatetaxcomponentComponent', () => {
  let component: CreatetaxcomponentComponent;
  let fixture: ComponentFixture<CreatetaxcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetaxcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
