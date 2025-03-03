import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //base url para ambiente de desenvolvimento usando api php 
 //private url = 'http://localhost:80/api_restoredhouse/php';

 
// base url ambiente de produção usando api php 
 private url = "https://restoredhouse.com.br/api_restoredhouse/php";
  


    

  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router:Router) {}

  
    // metodo de cadastro para php
    register(nome: string, senha: string): Observable<any> {
      console.log(nome, "chegando no método register do serviço AuthService");
  
      // Criar um corpo de requisição como texto simples
      const body = `${nome}\n${senha}`; // Enviando nome e senha em linhas separadas
  
      return this.http.post<any>(`${this.url}/cadastrar_users`, body, {
          headers: { 'Content-Type': 'text/plain' } // Definir o tipo de conteúdo como texto
      });
  }
  

  

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
