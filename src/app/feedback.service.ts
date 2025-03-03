import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from 'src/models/feedback.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // url para api PHP localhost
  //private url = 'http://localhost:80/api_restoredhouse/php';
  
  // servidor de produção com api php
  private url = "https://restoredhouse.com.br/api_restoredhouse/php";
   
  
  

   //array para armazenar os dados vindo do DB
   feedback:Feedback[] = [];

  constructor(private http: HttpClient) { }

  
 

// metodo cadastrar feedback php
enviarFeedback(feedbackData:any ): Observable<any> {
  console.log('Enviando solicitação HTTP para cadastrar feedbacks...');
  return this.http.post<any>(`${this.url}/cadastrar_feedbacks`, feedbackData);
}

  

  // listar feedbacks php
   getAllFeedbacks(): Observable<any[]> {
    console.log('Enviando solicitação HTTP para recuperar feedbacks...');
    console.log(`PHP feedback no seviceFeedback`);
    return this.http.get<any[]>(`${this.url}/listar_feedbacks`);
   }
   

   



   



// Método para deletar feedback no serviço
deleteFeedback(feedbackId: string): Observable<any> { 
  console.log('Enviando solicitação HTTP para excluir feedback...', feedbackId);

  // Enviar o ID diretamente no corpo da requisição
  return this.http.post<any>(`${this.url}/excluir_feedbacks`, feedbackId, {
    headers: { 'Content-Type': 'text/plain' } // Definir o tipo de conteúdo como texto
    
  });
}








}
