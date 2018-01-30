import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlistingComponent } from './clientlisting.component';

describe('ClientlistingComponent', () => {
  let component: ClientlistingComponent;
  let fixture: ComponentFixture<ClientlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
