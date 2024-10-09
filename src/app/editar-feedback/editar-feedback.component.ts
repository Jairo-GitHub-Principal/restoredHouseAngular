import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FeedbackService } from '../feedback.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Feedback } from 'src/models/feedback.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-editar-feedback',
  templateUrl: './editar-feedback.component.html',
  styleUrls: ['./editar-feedback.component.css']
})
export class EditarFeedbackComponent implements OnInit {
  feedbacks: any[];
  ID:any;
  feedbackidname="feedbacklist";
  rashtag = "#"
  v:any;
  video:string;
  feedbackExcluido: any[] = [];  

  constructor(
    private feedbackService: FeedbackService,
    private sanitizer: DomSanitizer,
    private authService: AuthService

    
    ) { }

  ngOnInit():void {
    this.loadFeedbacks();
  }

  loadFeedbacks() {

    console.log('Recuperando feedbacks do serviço...');

    this.feedbackService.getAllFeedbacks().subscribe(data => {
        
      this.feedbacks = data;
      this.ID = this.feedbacks.map(item=>item.id);
      
      /**
       * aqui estamos usango o DomSanitizer para desativar a proteção do angula em relaçaão 
       * so dados da proppriedade urlvideo que no banco de dados, ela armazena uma url de video 
       * e o angular por questão de segurança não estava permitindo que essa url fosse exibida no templete,
       * essa foi a solução encontrada até agora
       */
      this.feedbacks.forEach(item =>{
        item.urlvideo = this.sanitizer.bypassSecurityTrustResourceUrl(item.urlvideo);
      })

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





  // Excluir Feedback  
 // Método para excluir feedback no componente
excluirFeedback(id: string): void {
  console.log("ID recebido no método excluirFeedback", id);
  
  if (confirm('Tem certeza que deseja excluir este feedback?')) {
    this.feedbackService.deleteFeedback(id).subscribe(
      response => {
        console.log('Feedback enviado com sucesso:', response);
        alert('Feedbck excluido com sucesso!');
        this.feedbacks = this.feedbacks.filter(feedback => feedback.id !== parseInt(id, 10));
        this.loadFeedbacks();
      },
      error => {
        console.error('Erro ao enviar feedback:', error);
        alert('Erro ao enviar feedback. Por favor, tente novamente.');
      }

    );
  }
}


   finishinSection(){
        this.authService.logout();
   }
  


  

  


}


