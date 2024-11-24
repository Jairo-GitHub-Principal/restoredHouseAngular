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

 //url para api php hospedada no localweb
 //private url = 'http://localhost/api_restoredhouse/php';

  // base url para ambiente de produção
private url ='http://jairocesa.com.br/api_restoredhouse/php';

  //private baseUrl = 'http://jcwebteste.com.br:3000';// URL base do servidor Node.js

    // base url para ambiente de produção
  //private baseUrl = "http://jairocesar.pessoal.ws:3000";

  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router:Router) {}

  // metodo de cadastro para nodeJs
  // register(nome: string, senha: string) {

  //   console.log(nome,"chegando no metodo register do serviço AuthService")
  //   const action='register';
  //   return this.http.post<any>(`${this.baseUrl}/register`, { nome, senha});
  // }

    // metodo de cadastro para php
    register(nome: string, senha: string): Observable<any> {
      console.log(nome, "chegando no método register do serviço AuthService");
  
      // Criar um corpo de requisição como texto simples
      const body = `${nome}\n${senha}`; // Enviando nome e senha em linhas separadas
  
      return this.http.post<any>(`${this.url}/cadastrar_users`, body, {
          headers: { 'Content-Type': 'text/plain' } // Definir o tipo de conteúdo como texto
      });
  }
  



    // metodo login para nodeJs
  //  login(nome: string, senha: string): Observable<any> {
  //   console.log("chegando no metodo login de authService",nome, senha,)
  //   const action ='login';
  //   return this.http.post<any>(`${this.baseUrl}/login`, { nome, senha }).pipe(tap((res) => this.setToken(res.token)));
  // }

  //metodo login para php
  login(nome: string, senha: string): Observable<any> {
    console.log("chegando no metodo login de authService",nome, senha,)
    const action ='login';
    return this.http.post<any>(`${this.url}/login`, { nome, senha,action }).pipe(tap((res) => this.setToken(res.token)));
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
