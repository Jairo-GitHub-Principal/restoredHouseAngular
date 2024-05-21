import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarFeedbackComponent } from './cadastrar-feedback/cadastrar-feedback.component';
import { ContatosComponent } from './contatos/contatos.component';
import { EditarDeletarFeedBackComponent } from './editar-deletar-feed-back/editar-deletar-feed-back.component';
import { EditarFeedbackComponent } from './editar-feedback/editar-feedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GerenciarFeedbackComponent } from './gerenciar-feedback/gerenciar-feedback.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { GuardaRotasGuard } from './guarda-rotas.guard';

const routes: Routes = [
// criar as rotas ou paths aqui
{path:"",redirectTo:"home",pathMatch:"full"},
{path: 'home',component:HomeComponent},
{path: 'servico',component:ServicosComponent},
{path: 'quem-somos',component:QuemSomosComponent},
{path: 'contatos',component:ContatosComponent},
{path: 'trabalho',component:TrabalhosComponent},
{path: 'feedback',component:FeedbackComponent},
{path: 'cadastrar-feedback', component:CadastrarFeedbackComponent},
{path: 'gerenciar-feedback',component:GerenciarFeedbackComponent},

{path: 'editar-feedback',component:EditarFeedbackComponent,canActivate:[GuardaRotasGuard]}, // sera minha lista de feedbacks que eu escolho se edito ou deleto
{path:'',redirectTo:'/gerenciar-feedback',pathMatch:'full'},

{path:'editar-deletar-feedback',component:EditarDeletarFeedBackComponent},
{path:'autentication',component:AuthComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
