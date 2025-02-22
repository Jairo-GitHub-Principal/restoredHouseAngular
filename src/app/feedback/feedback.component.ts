import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FeedbackService } from "../feedback.service";
import { DomSanitizer } from '@angular/platform-browser';
import { Feedback } from 'src/models/feedback.model';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: any[];
  ID:any;
  feedbackidname="feedbacklist"; // esse é o nome do id da tag html, que sera concatenado com o id de cada registro vindo do DB, dando origem a um nomes destintos para as tags html dentro do lacp forEach assim teremos um id="" dinamico
   rashtag = "#"
  v:any;
  video:string;

  // array usadoo para api php
  feedback: Feedback[];
  

  constructor(private feedbackService: FeedbackService,private sanitizer: DomSanitizer ) { }

  ngOnInit():void {
    this.loadFeedbacks();
  }

  // loadFeedbacks() {

  //   console.log('Recuperando feedbacks do serviço...');

  //   this.feedbackService.getAllFeedbacks().subscribe(data => {
  //       console.log(`PHP chegou aqui${data}`)
  //     this.feedback = data;
  //     this.ID = this.feedback.map(item=>item.id);
      
  //     /**
  //      * aqui estamos usango o DomSanitizer para desativar a proteção do angula em relaçaão 
  //      * so dados da proppriedade urlvideo que no banco de dados, ela armazena uma url de video 
  //      * e o angular por questão de segurança não estava permitindo que essa url fosse exibida no templete,
  //      * essa foi a solução encontrada até agora
  //      */
  //     this.feedbacks.forEach(item =>{
  //       item.urlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(item.urlvideo);
  //     })

  //       },
       
      
  //     error => {
  //       console.error('Erro ao recuperar feedbacks:', error);
  //     });

      
      
  // }

  loadFeedbacks() {

    console.log('Recuperando feedbacks do serviço...');

    this.feedbackService.getAllFeedbacks().subscribe(data => {
        console.log(`PHP chegou aqui${data}`)
     
        this.feedbacks = data.map(item =>{
          item.urlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(item.urlvideo);
          this.ID = item.id;
         return item;
         
        })

      
      /**
       * aqui estamos usango o DomSanitizer para desativar a proteção do angula em relaçaão 
       * so dados da proppriedade urlvideo que no banco de dados, ela armazena uma url de video 
       * e o angular por questão de segurança não estava permitindo que essa url fosse exibida no templete,
       * essa foi a solução encontrada até agora
       */
      

        },
       
      
      error => {
        console.error('Erro ao recuperar feedbacks:', error);
      });
  }




  // concatena um nome o nome feedbacklist com o id do feedback que sera listado para criar um nome dinamico para o 
  //id que do modal, se não for assim o nome do id do modal sera sempre o mesmo e por consequencia 
  //o conteudo de todos modais listados serão sempre o mesmo
  declaraID(string1: string, variavel2: any): string {
    return string1+variavel2;
  }
  //implementa o nome dinamico do id para a chamada do modal pelo botão  
  chamaID(string1:string,variavel2:any):string{
    return this.rashtag+string1+variavel2;
  }

  chamaVideo( video:string|any){
    return this.video = stringify(video);
  }


  
}

