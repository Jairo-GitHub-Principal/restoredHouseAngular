import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //base url para ambiente de desenvolvimento
 //private baseUrl = 'http://localhost:3000';

  // base url para ambiente de produção
  //private baseUrl = 'http://jcwebteste.com.br:3000';// URL base do servidor Node.js

    // base url para ambiente de produção
  private baseUrl = "http://jairocesar.pessoal.ws:3000";

  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router:Router) {}

  register(nome: string, senha: string) {

    console.log(nome,"chegando no metodo register do serviço AuthService")
    return this.http.post<any>(`${this.baseUrl}/register`, { nome, senha });
  }

  login(nome: string, senha: string): Observable<any> {
    console.log("chegando no metodo login de authService",nome, senha,)
    return this.http.post<any>(`${this.baseUrl}/login`, { nome, senha }).pipe(tap((res) => this.setToken(res.token)));
  }

  setToken(token: string) {
    console.log("chegando no metodo login de setToken",token)
      localStorage.setItem(this.tokenKey, token);
      console.log("chegando no metodo login de setToken",localStorage);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey);
    
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/home'])
  }

 
  isAuthenticated(): boolean {
    // Implemente a lógica para verificar se o usuário está autenticado
    // Você pode usar localStorage, sessionStorage ou outros métodos de armazenamento para isso
    return !!localStorage.getItem(this.tokenKey);
  }
}
