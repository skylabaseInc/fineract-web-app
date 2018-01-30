import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsavingssummaryComponent } from './clientsavingssummary.component';

describe('ClientsavingssummaryComponent', () => {
  let component: ClientsavingssummaryComponent;
  let fixture: ComponentFixture<ClientsavingssummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsavingssummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsavingssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
