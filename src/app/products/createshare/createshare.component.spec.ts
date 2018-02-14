import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateshareComponent } from './createshare.component';

describe('CreateshareComponent', () => {
  let component: CreateshareComponent;
  let fixture: ComponentFixture<CreateshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
