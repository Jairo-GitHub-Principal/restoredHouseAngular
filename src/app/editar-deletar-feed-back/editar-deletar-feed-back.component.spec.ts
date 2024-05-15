import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeletarFeedBackComponent } from './editar-deletar-feed-back.component';

describe('EditarDeletarFeedBackComponent', () => {
  let component: EditarDeletarFeedBackComponent;
  let fixture: ComponentFixture<EditarDeletarFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDeletarFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDeletarFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
