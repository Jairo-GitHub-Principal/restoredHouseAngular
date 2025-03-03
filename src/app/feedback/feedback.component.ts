import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FeedbackService } from "../feedback.service";
import { DomSanitizer } from '@angular/platform-browser';
import { Feedback } from 'src/models/feedback.model';
// import defaultImg from './../../assets/imgDefault/imgDefault' ;




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


  loadFeedbacks() {

    console.log('Recuperando feedbacks do serviço...');

    this.feedbackService.getAllFeedbacks().subscribe(data => {
        console.log(`PHP chegou aqui no comp feedback ${data.map(item => item.imagemcard)}`)
     
        this.feedbacks = data.map(item =>{
          // item.urlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(item.urlvideo);
          this.ID = item.id;
          console.log("imageem", item.imagemcard)

          
           // Verifica se imagemcard é inválido e define uma imagem padrão
        if (!item.imagemcard || !item.imagemcard.startsWith('http')) {
          item.imagemcard = './../../assets/imgDefault/imgDefault.png';
          item.imagemcardmodalurl = './../../assets/imgDefault/imgDefault.png';                 
        }

        // verifica se a url do video é valida, caso não: define uma url de video padrão  
          if (!item.urlvideo || !item.urlvideo.startsWith('http')) {
            const defaultYouTubeURL  = "https://www.youtube.com/embed/d9o6HnPa2GA?si=gj0OdOuIFUX450k6"; // Coloque aqui o caminho do vídeo padrão
            item.urlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(defaultYouTubeURL);

          } else {
            // Sanitiza a URL do vídeo apenas se for válida
            item.urlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(item.urlvideo);
          }
  
       
        
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

