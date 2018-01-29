import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjournalComponent } from './searchjournal.component';

describe('SearchjournalComponent', () => {
  let component: SearchjournalComponent;
  let fixture: ComponentFixture<SearchjournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchjournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
