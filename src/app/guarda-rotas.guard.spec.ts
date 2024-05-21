import { TestBed, async, inject } from '@angular/core/testing';

import { GuardaRotasGuard } from './guarda-rotas.guard';

describe('GuardaRotasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardaRotasGuard]
    });
  });

  it('should ...', inject([GuardaRotasGuard], (guard: GuardaRotasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
