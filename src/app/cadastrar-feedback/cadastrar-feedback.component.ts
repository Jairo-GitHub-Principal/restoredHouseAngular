import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-feedback',
  templateUrl: './cadastrar-feedback.component.html',
  styleUrls: ['./cadastrar-feedback.component.css']
})
export class CadastrarFeedbackComponent implements OnInit {
  titulo: string;
  apresentacao: string;
  detalhes: string;
  constructor() { }

  ngOnInit() {
  }

  cadastrarFeedback() {
    // Aqui você pode adicionar a lógica para enviar os dados do feedback para o backend
    console.log('Feedback cadastrado:', this.titulo, this.apresentacao, this.detalhes);
  }

}
