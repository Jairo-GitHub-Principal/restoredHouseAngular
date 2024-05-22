import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: string;
  senha: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.nome, this.senha).subscribe(
      
      () => {
        console.log(this.nome, this.senha)
        this.router.navigate(['/editar-feedback']);
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
