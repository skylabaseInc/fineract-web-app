import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividudualcollectComponent } from './individudualcollect.component';

describe('IndividudualcollectComponent', () => {
  let component: IndividudualcollectComponent;
  let fixture: ComponentFixture<IndividudualcollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividudualcollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividudualcollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
