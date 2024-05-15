import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFeedbackComponent } from './editar-feedback.component';

describe('EditarFeedbackComponent', () => {
  let component: EditarFeedbackComponent;
  let fixture: ComponentFixture<EditarFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
