import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoatingratesComponent } from './foatingrates.component';

describe('FoatingratesComponent', () => {
  let component: FoatingratesComponent;
  let fixture: ComponentFixture<FoatingratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoatingratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoatingratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
