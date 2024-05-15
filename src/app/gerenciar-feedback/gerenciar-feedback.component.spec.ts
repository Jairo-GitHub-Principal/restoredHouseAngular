import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarFeedbackComponent } from './gerenciar-feedback.component';

describe('GerenciarFeedbackComponent', () => {
  let component: GerenciarFeedbackComponent;
  let fixture: ComponentFixture<GerenciarFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
