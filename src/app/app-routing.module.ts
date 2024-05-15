import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarFeedbackComponent } from './cadastrar-feedback/cadastrar-feedback.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ControleSessaoComponent } from './controle-sessao/controle-sessao.component';
import { EditarDeletarFeedBackComponent } from './editar-deletar-feed-back/editar-deletar-feed-back.component';
import { EditarFeedbackComponent } from './editar-feedback/editar-feedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GerenciarFeedbackComponent } from './gerenciar-feedback/gerenciar-feedback.component';
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
{path: 'cadastrar-feedback', component:CadastrarFeedbackComponent},
{path: 'gerenciar-feedback',component:GerenciarFeedbackComponent},
{path: 'editar-feedback',component:EditarFeedbackComponent}, // sera minha lista de feedbacks que eu escolho se edito ou deleto
//{path:'editar-feedback',loadChildren:()=>import('./editar-feedback/editar-feedback.component').then(m=> m.EditarFeedbackComponent)}
{path:'editar-deletar-feedback',component:EditarDeletarFeedBackComponent},
{path:'controle-sessao',component:ControleSessaoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
