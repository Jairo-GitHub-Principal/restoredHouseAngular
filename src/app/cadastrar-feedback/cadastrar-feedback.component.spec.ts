import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFeedbackComponent } from './cadastrar-feedback.component';

describe('CadastrarFeedbackComponent', () => {
  let component: CadastrarFeedbackComponent;
  let fixture: ComponentFixture<CadastrarFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
