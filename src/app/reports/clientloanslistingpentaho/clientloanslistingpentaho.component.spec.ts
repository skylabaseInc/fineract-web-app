import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientloanslistingpentahoComponent } from './clientloanslistingpentaho.component';

describe('ClientloanslistingpentahoComponent', () => {
  let component: ClientloanslistingpentahoComponent;
  let fixture: ComponentFixture<ClientloanslistingpentahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientloanslistingpentahoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientloanslistingpentahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
