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

}
