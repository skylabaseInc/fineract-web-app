import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigurationEmailComponent } from './view-configuration-email.component';

describe('ViewConfigurationEmailComponent', () => {
  let component: ViewConfigurationEmailComponent;
  let fixture: ComponentFixture<ViewConfigurationEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfigurationEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigurationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
