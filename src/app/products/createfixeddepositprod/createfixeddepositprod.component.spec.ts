import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefixeddepositprodComponent } from './createfixeddepositprod.component';

describe('CreatefixeddepositprodComponent', () => {
  let component: CreatefixeddepositprodComponent;
  let fixture: ComponentFixture<CreatefixeddepositprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefixeddepositprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefixeddepositprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
