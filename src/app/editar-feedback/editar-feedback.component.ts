import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FeedbackService } from '../feedback.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Feedback } from 'src/models/feedback.model';


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
  feedbackSelecionado:Feedback;
  

  constructor(
    private feedbackService: FeedbackService,
    private sanitizer: DomSanitizer,

    
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
  excluirFeedback(id: string): void {
    console.log("id chegando no metodo excluirFeedback editar-feedback.component", id);
    if (confirm('Tem certeza que deseja excluir este feedback?')) {
      this.feedbackService.deleteFeedback(id).subscribe(
        (res:Feedback) => {
          console.log('Feedback excluído com sucesso!',res.titulo);
          // Remover o feedback da lista após a exclusão
          this.feedbacks = this.feedbacks.filter(feedback => feedback.id !== id);
        },
        error => {
          console.error('Erro ao excluir feedback:', error);
          // Se houver um erro, exibir uma mensagem de erro para o usuário
          // ou tratar de outra forma apropriada
        }
      );
    }
  }
  


  // excluirFeedback(id: string): void {
   
  //   console.log("id chegando no metodo excluirFeedback editar-feedback.comonent", id);
  //   if (confirm('Tem certeza que deseja excluir este feedback?')) {
  //     this.feedbackService.deleteFeedback(id).subscribe(() => {
  //       // Remover o feedback da lista após a exclusão
  //       this.feedbacks = this.feedbacks.filter(feedback => feedback.id !== id);
  //     });
  //   }
  // }

  


}


/**
 * 
 * 
 *  feedback:Feedback;
  id:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id'];
    this.carregarFeedback();
  }

  carregarFeedback():void{
    this.feedbackService.getFeedbackforID(this.id).subscribe((data:Feedback)=>{
      this.feedback = data;
    });
  }

  salvarEdicao():void{
    this.feedbackService.updateFeedback(this.id, this.feedback).subscribe(()=>{
      this.router.navigate(['/editar-feedback']); // a url aqui dentro, ela lista os fidbacks e eu escolho se edito ou deleto
    })
  }
 * 
 * 
 */
