import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPsychologistsComponent } from './list-psychologists.component';

describe('ListPsychologistsComponent', () => {
  let component: ListPsychologistsComponent;
  let fixture: ComponentFixture<ListPsychologistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPsychologistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPsychologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
