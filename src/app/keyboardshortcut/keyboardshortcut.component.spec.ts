import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardshortcutComponent } from './keyboardshortcut.component';

describe('KeyboardshortcutComponent', () => {
  let component: KeyboardshortcutComponent;
  let fixture: ComponentFixture<KeyboardshortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardshortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardshortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
