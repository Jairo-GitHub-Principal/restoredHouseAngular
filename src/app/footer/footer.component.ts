import { Component, OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    currentUrl:string;
    rotaAtual:string
  constructor(private router:Router) {
   
   }

  ngOnInit() {
    // captura a rota atual, onde usaremos a mesma para a navegação para o topo da pagina
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.url;
      }
    });
 
        
  }

  

  
  

}
