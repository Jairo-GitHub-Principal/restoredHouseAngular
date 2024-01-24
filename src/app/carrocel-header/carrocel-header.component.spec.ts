import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelHeaderComponent } from './carrocel-header.component';

describe('CarrocelHeaderComponent', () => {
  let component: CarrocelHeaderComponent;
  let fixture: ComponentFixture<CarrocelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrocelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrocelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
