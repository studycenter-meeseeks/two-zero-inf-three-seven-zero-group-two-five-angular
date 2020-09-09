import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPsychologistComponent } from './add-psychologist.component';

describe('AddPsychologistComponent', () => {
  let component: AddPsychologistComponent;
  let fixture: ComponentFixture<AddPsychologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPsychologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPsychologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
