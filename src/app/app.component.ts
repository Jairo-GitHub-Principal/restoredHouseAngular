import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.title.setTitle('RestoredHouse');
  }   

  ngOnInit(): void {
    // Definir o título da página
    this.title.setTitle('RestoredHouse - Construção e Reforma de Casas com Qualidade');

    // Definir as meta tags
    this.meta.addTags([
      { name: 'description', content: 'A RestoredHouse oferece serviços especializados em construção e reformas de casas. Qualidade, rapidez e preço justo para transformar seu lar. Peça um orçamento!' },
      { name: 'keywords', content: 'construção de casas, reforma residencial, pedreiro, pintura, serviços elétricos, hidráulica, engenharia civil, arquitetura, obra, manutenção, reparo, design de interiores, acabamento, pisos, azulejos' },
      { name: 'author', content: 'RestoredHouse - Construção e Reforma' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph (Facebook e WhatsApp)
      { property: 'og:title', content: 'RestoredHouse - Construção e Reforma de Casas com Qualidade' },
      { property: 'og:description', content: 'Profissionais qualificados para construir ou reformar sua casa com segurança e eficiência. Solicite um orçamento gratuito.' },
      { property: 'og:image', content: 'https://restoredhouse.com.br/imagem-de-capa.jpg' },
      { property: 'og:url', content: 'https://restoredhouse.com.br' },
      { property: 'og:type', content: 'website' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'RestoredHouse - Construção e Reforma de Casas' },
      { name: 'twitter:description', content: 'Especialistas em construção e reforma de casas. Qualidade e confiança para o seu projeto.' },
      { name: 'twitter:image', content: 'https://restoredhouse.com.br/imagem-de-capa.jpg' }
    ]);
  }
}
