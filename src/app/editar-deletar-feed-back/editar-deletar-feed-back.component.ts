import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { stringify } from 'querystring';
import { Feedback } from 'src/models/feedback.model';
import { FeedbackService } from '../feedback.service';




@Component({
  selector: 'app-editar-deletar-feed-back',
  templateUrl: './editar-deletar-feed-back.component.html',
  styleUrls: ['./editar-deletar-feed-back.component.css']
})
export class EditarDeletarFeedBackComponent implements OnInit {
  feedbacks: any[];
  ID:any;
  feedbackidname="feedbacklist";
  rashtag = "#"
  v:any;
  video:string;

  constructor(
    private feedbackService: FeedbackService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit() {
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

  deleteFeedback(feedbackId: string): void {
    this.feedbackService.deleteFeedback(feedbackId).subscribe(
      () => {
        console.log('Feedback excluído com sucesso!');
        // Atualize a lista de feedbacks após a exclusão
        this.loadFeedbacks();
      },
      error => {
        console.error('Erro ao excluir feedback:', error);
        // Trate o erro adequadamente
      }
    );
  }




  

}
