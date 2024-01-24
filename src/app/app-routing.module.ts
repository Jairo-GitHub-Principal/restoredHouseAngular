import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';

const routes: Routes = [
// criar as rotas ou paths aqui
{path:"",redirectTo:"home",pathMatch:"full"},
{path: 'home',component:HomeComponent},
{path: 'servico',component:ServicosComponent},
{path: 'quem-somos',component:QuemSomosComponent},
{path: 'contatos',component:ContatosComponent},
{path: 'trabalho',component:TrabalhosComponent},
{path: 'feedback',component:FeedbackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
