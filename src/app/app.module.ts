import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyHomeComponent } from './body-home/body-home.component';
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
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyHomeComponent,
   
    ContatosComponent,
    HomeComponent,
    NavMenuComponent,
    QuemSomosComponent,
    ServicosComponent,
    TrabalhosComponent,
    FeedbackComponent,
    WhatsAppContatoComponent,
    CarrocelHeaderComponent,
    ScrollToTopButtonComponent,
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
