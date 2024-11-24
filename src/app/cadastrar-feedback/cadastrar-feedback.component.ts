import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FeedbackService } from "../feedback.service";


@Component({
  selector: 'app-cadastrar-feedback',
  templateUrl: './cadastrar-feedback.component.html',
  styleUrls: ['./cadastrar-feedback.component.css']
})
export class CadastrarFeedbackComponent implements OnInit {
  titulo: string;
  apresentacao: string;
  detalhes: string;
  feedbackData = {
    titulo: '',
    textodocard: '',
    imagemcard: '',
    titulomodal: '',
    textcardmodal: '',
    imagemcardmodalurl: '',
    urlvideo: ''
  };
  constructor(private feedbackService:FeedbackService, private authService: AuthService) { }

  ngOnInit() {
  }

  cadastrarFeedback() {
    console.log("Dados de feedback: "+this.feedbackData);
    if (this.feedbackData) {
      if(this.feedbackData.imagemcard && this.feedbackData.imagemcardmodalurl){
        this.feedbackService.enviarFeedback(this.feedbackData).subscribe(
          response => {
            console.log('Feedback enviado com sucesso:', response);
            alert('Feedback enviado com sucesso!');
            this.resetForm(); // Limpa o campo de feedback após o envio
          },
          error => {
            console.error('Erro ao enviar feedback:', error);
            alert('Erro ao enviar feedback. Por favor, tente novamente.');
          }
        );
      }else{
        alert("Os campos: url para img card e  url para img do modal,\n são de prenchimento obrigatorio  ");
      }
      
      
    } 

   
  }

  resetForm() {
    this.feedbackData = {
      titulo: '',
      textodocard: '',
      imagemcard: '',
      titulomodal: '',
      textcardmodal: '',
      imagemcardmodalurl: '',
      urlvideo: ''
    };
  }


  finishinSection(){
    this.authService.logout();
  }

  animateButton():void{
    const button = document.querySelector('#enviar');
      
        button.classList.add('animation');
      
     setTimeout(() => {
      button.classList.remove('animation');
    }, 100);
  }

}
