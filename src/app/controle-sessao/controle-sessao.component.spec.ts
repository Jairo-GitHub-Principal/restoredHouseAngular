import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleSessaoComponent } from './controle-sessao.component';

describe('ControleSessaoComponent', () => {
  let component: ControleSessaoComponent;
  let fixture: ComponentFixture<ControleSessaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleSessaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
