import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesmscampaignComponent } from './createsmscampaign.component';

describe('CreatesmscampaignComponent', () => {
  let component: CreatesmscampaignComponent;
  let fixture: ComponentFixture<CreatesmscampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesmscampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesmscampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
