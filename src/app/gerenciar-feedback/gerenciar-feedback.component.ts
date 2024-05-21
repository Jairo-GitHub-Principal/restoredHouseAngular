import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
// import { GuardaRotasService } from '../guarda-rotas.service';
// import { SenhaComponent } from './senha/senha.component';

@Component({
  selector: 'app-gerenciar-feedback',
  templateUrl: './gerenciar-feedback.component.html',
  styleUrls: ['./gerenciar-feedback.component.css']
})
export class GerenciarFeedbackComponent implements OnInit {
   //senha: string = "";
 
  constructor( private route:Router,/*private guardaRota: GuardaRotasService*/) { }

  ngOnInit() {
    // Verificar se o usuário está autenticado ao carregar a página
    // if (!this.guardaRota.isAutenticado()) {
    //   this.route.navigate(['/gerenciar-feedback']);
    // }
  }

  // verificarSenha() {
  //   const senhaValida = '1234'; // Defina sua senha segura aqui ou busque de um serviço seguro

  //   if (this.senha === senhaValida) {
  //     this.route.navigate(['/editar-feedback']);
  //   } else {
  //     alert('Senha inválida. Tente novamente.');
  //   }
  // }



  verificarSenha2(senha: string) {
    const SenhaCorreta = "1234";
    if (senha === SenhaCorreta) {
      alert('Senha correta!');
      this.route.navigate(['/editar-feedback']);
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  }

  navegarPara(page:string){
    this.route.navigate([page])
  }

}
