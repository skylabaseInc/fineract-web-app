import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitydataComponent } from './entitydata.component';

describe('EntitydataComponent', () => {
  let component: EntitydataComponent;
  let fixture: ComponentFixture<EntitydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
