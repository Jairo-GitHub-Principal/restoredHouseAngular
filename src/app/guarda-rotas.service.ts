import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardaRotasService {

  constructor() { }

  isAutenticado(): boolean {
      // Adicione sua lógica de verificação de autenticação aqui
    // Por exemplo, verifique se o usuário está logado ou se possui um token válido
    // Retorne true se autenticado, caso contrário, retorne false
    return true; // Simulação simples, substitua por sua lógica real

  }
}