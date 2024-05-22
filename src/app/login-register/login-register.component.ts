import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  nome: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}



  ngOnInit() {
  }

  register() {
    console.log(this.nome," ",this.senha, " chegando na classe login-register do componente login-register")
    this.authService.register(this.nome, this.senha).subscribe(
      response => {
        console.log('Usuário registrado com sucesso', response);
        this.router.navigate(['/login']); // Navega para a tela de login após o registro
      },
      error => {
        console.error('Erro ao registrar usuário', error);
      }
    );
  }


}
