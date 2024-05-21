import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GuardaRotasService } from './guarda-rotas.service';
import { CanActivate, Router } from '@angular/router';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardaRotasGuard implements CanActivate  {
  constructor(private guardaRotas: GuardaRotasService, private router: Router) {}

  canActivate(): boolean {
    if (this.guardaRotas.isAutenticado()) {
      return true;
    } else {
      alert("Você deve confirmar sua senha");
      this.router.navigate(['/gerenciar-feedback']);
      return false;
    }
  }
}
