import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAccountSetupComponent } from './patient-account-setup.component';

describe('PatientAccountSetupComponent', () => {
  let component: PatientAccountSetupComponent;
  let fixture: ComponentFixture<PatientAccountSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAccountSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAccountSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
