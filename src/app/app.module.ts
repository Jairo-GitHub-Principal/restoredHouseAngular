import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import { CarrocelHeaderComponent } from './carrocel-header/carrocel-header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyHomeComponent,
    CarrocelHeaderComponent,
    ContatosComponent,
    HomeComponent,
    NavMenuComponent,
    QuemSomosComponent,
    ServicosComponent,
    TrabalhosComponent,
    FeedbackComponent,
    WhatsAppContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
