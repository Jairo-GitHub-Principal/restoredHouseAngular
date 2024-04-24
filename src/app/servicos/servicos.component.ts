import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
texto:string;
  constructor() { }

  ngOnInit() {
    this.atualizarTexto();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.atualizarTexto();
  }

  private atualizarTexto() {
    if (window.innerWidth > 600) {
      this.texto = "Principais Serviços que oferecemos aos nossos clientes";
    } else {
      this.texto = "Nossos serviços";
    }
  }

}


