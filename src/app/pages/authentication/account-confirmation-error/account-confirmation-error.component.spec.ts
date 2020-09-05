import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConfirmationErrorComponent } from './account-confirmation-error.component';

describe('AccountConfirmationErrorComponent', () => {
  let component: AccountConfirmationErrorComponent;
  let fixture: ComponentFixture<AccountConfirmationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountConfirmationErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountConfirmationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
