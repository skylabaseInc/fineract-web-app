import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlistingpentahoComponent } from './clientlistingpentaho.component';

describe('ClientlistingpentahoComponent', () => {
  let component: ClientlistingpentahoComponent;
  let fixture: ComponentFixture<ClientlistingpentahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientlistingpentahoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientlistingpentahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
