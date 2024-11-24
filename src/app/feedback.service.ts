import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Feedback } from 'src/models/feedback.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // url para api PHP localhost
  //private url = 'http://localhost:80/api_restoredhouse/php/';
  
   
  // local host na porta 3000 no ambiente de desenvolvimento  'http://192.168.1.8:3000' ou 'http://192.168.1.8:3000'
  //private baseUrl = 'http://localhost:3000'; // URL base do servidor Node.js
  //private baseUrl = 'http://localhost:3000';



  // localhost do servidor de produção  'http://191.252.197.11:3000'

  private url ='http://jairocesa.com.br/api_restoredhouse/php/';


  //  private baseUrl = "http://jcwebteste.com.br:3000";

   // localhos do servidor de produção 
   //private baseUrl = "http://jairocesar.pessoal.ws:3000";


   //array para armazenar os dados vindo do DB
   feedback:Feedback[] = [];

  constructor(private http: HttpClient) { }

  
 // metodo cadastrar feedback  nodeJs
//  enviarFeedback(feedbackData:any ): Observable<any> {
//   console.log('Enviando solicitação HTTP para cadastrar feedbacks...');
//   return this.http.post<any>(`${this.baseUrl}/feedback`, feedbackData);
// }

// metodo cadastrar feedback php
enviarFeedback(feedbackData:any ): Observable<any> {
  console.log('Enviando solicitação HTTP para cadastrar feedbacks...');
  return this.http.post<any>(`${this.url}/cadastrar_feedbacks`, feedbackData);
}

  // Método para recuperar todos os feedbacks do servidor Node.js
  // listar feedbacks
  
  
  // listar feedbacks nodejs
  // getAllFeedbacks(): Observable<any[]> {
  //   console.log('Enviando solicitação HTTP para recuperar feedbacks...');
  //   console.log(`PHP feedback no seviceFeedback`);
  //   return this.http.get<any[]>(`${this.baseUrl}/feedback`);
  //  }

  // listar feedbacks php
   getAllFeedbacks(): Observable<any[]> {
    console.log('Enviando solicitação HTTP para recuperar feedbacks...');
    console.log(`PHP feedback no seviceFeedback`);
    return this.http.get<any[]>(`${this.url}listar_feedbacks`);
   }
   

    // listar feedbacks php
  // getAllFeedbacks():Observable<Feedback[]>{   // metodo pra listar os feedbacks para php
  //   return this.http.get(this.url+"listar.php")   
  //   .pipe( map((res:any) =>{  //tipar o res com any  
  //      this.feedback = res; // remover o res['curso']
  //      console.log(`PHP feedback no seviceFeedback ${this.feedback}`);
  //      return this.feedback;
  //     }))
  //   }



   
// metodo deletar feedback nodeJs
// deleteFeedback(feedbackId: string): Observable<any> {
//   console.log('Enviando solicitação HTTP para excluir feedback...',feedbackId);
//   const url = (`${this.baseUrl}/feedback/${feedbackId}`);
//   console.log('URL para exclusão:', url); // Adiciona este log
//   return this.http.delete<any>(url);
// }


// Método para deletar feedback no serviço
deleteFeedback(feedbackId: string): Observable<any> { 
  console.log('Enviando solicitação HTTP para excluir feedback...', feedbackId);

  // Enviar o ID diretamente no corpo da requisição
  return this.http.post<any>(`${this.url}/excluir_feedbacks`, feedbackId, {
    headers: { 'Content-Type': 'text/plain' } // Definir o tipo de conteúdo como texto
    
  });
}








}
