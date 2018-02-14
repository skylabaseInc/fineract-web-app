import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehookComponent } from './createhook.component';

describe('CreatehookComponent', () => {
  let component: CreatehookComponent;
  let fixture: ComponentFixture<CreatehookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
