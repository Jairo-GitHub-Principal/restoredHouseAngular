import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppContatoComponent } from './whats-app-contato.component';

describe('WhatsAppContatoComponent', () => {
  let component: WhatsAppContatoComponent;
  let fixture: ComponentFixture<WhatsAppContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsAppContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsAppContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
