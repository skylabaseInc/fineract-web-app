import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientloanslistingComponent } from './clientloanslisting.component';

describe('ClientloanslistingComponent', () => {
  let component: ClientloanslistingComponent;
  let fixture: ComponentFixture<ClientloanslistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientloanslistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientloanslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
