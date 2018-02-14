import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetaxcomponentsComponent } from './managetaxcomponents.component';

describe('ManagetaxcomponentsComponent', () => {
  let component: ManagetaxcomponentsComponent;
  let fixture: ComponentFixture<ManagetaxcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetaxcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetaxcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
