import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WhatsAppContatoComponent } from './whats-app-contato/whats-app-contato.component';
import { CarrocelHeaderComponent } from './carrocel-header/carrocel-header.component';
import { CadastrarFeedbackComponent } from './cadastrar-feedback/cadastrar-feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { GerenciarFeedbackComponent } from './gerenciar-feedback/gerenciar-feedback.component';
import { EditarFeedbackComponent } from './editar-feedback/editar-feedback.component';
import { EditarDeletarFeedBackComponent } from './editar-deletar-feed-back/editar-deletar-feed-back.component';
import { ControleSessaoComponent } from './controle-sessao/controle-sessao.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContatosComponent,
    HomeComponent,
    NavMenuComponent,
    QuemSomosComponent,
    ServicosComponent,
    TrabalhosComponent,
    FeedbackComponent,
    WhatsAppContatoComponent,
    CarrocelHeaderComponent,
    CadastrarFeedbackComponent,
    GerenciarFeedbackComponent,
    EditarFeedbackComponent,
    EditarDeletarFeedBackComponent,
    ControleSessaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule 

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
