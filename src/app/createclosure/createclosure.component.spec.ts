import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclosureComponent } from './createclosure.component';

describe('CreateclosureComponent', () => {
  let component: CreateclosureComponent;
  let fixture: ComponentFixture<CreateclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
