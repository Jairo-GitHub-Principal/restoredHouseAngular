import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = 'http://localhost:3000'; // URL base do servidor Node.js

  constructor(private http: HttpClient) { }
  
  // Método para recuperar todos os feedbacks do servidor Node.js
  getAllFeedbacks(): Observable<any[]> {
    console.log('Enviando solicitação HTTP para recuperar feedbacks...');
    return this.http.get<any[]>(`${this.baseUrl}/feedback`);
 
  }

  enviarFeedback(feedbackData:any ): Observable<any> {
    console.log('Enviando solicitação HTTP para cadastrar feedbacks...');
    return this.http.post<any>(`${this.baseUrl}/feedback`, feedbackData);
  }
  
  

}
