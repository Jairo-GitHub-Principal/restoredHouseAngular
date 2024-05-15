import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from 'src/models/feedback.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = 'http://localhost:3000'; // URL base do servidor Node.js

  constructor(private http: HttpClient) { }

  
 // cadastrar feedback
 enviarFeedback(feedbackData:any ): Observable<any> {
  console.log('Enviando solicitação HTTP para cadastrar feedbacks...');
  return this.http.post<any>(`${this.baseUrl}/feedback`, feedbackData);
}

  // Método para recuperar todos os feedbacks do servidor Node.js
  // listar feedbacks
  getAllFeedbacks(): Observable<any[]> {
    console.log('Enviando solicitação HTTP para recuperar feedbacks...');
    return this.http.get<any[]>(`${this.baseUrl}/feedback`);
   }
   
   // deletar um fidback
  
   // feedback.service.ts
deleteFeedback(feedbackId: string): Observable<any> {
  console.log('Enviando solicitação HTTP para excluir feedback...',feedbackId);
  const url = (`${this.baseUrl}/feedback/${feedbackId}`);
  console.log('URL para exclusão:', url); // Adiciona este log
  return this.http.delete<any>(url);
}



}
