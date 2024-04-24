import { Component, HostListener, OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScrollTopService } from '../scroll-top.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  showBackToTopButton: boolean = false;

  @HostListener('window:scroll',[])

  onWindowScroll(){
    // Verifica se o usuário rolou até o final da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.showBackToTopButton = true;
    } else {
      this.showBackToTopButton = false;
    }

  }

  constructor(private scrollTopService: ScrollTopService) {}
  scrollToTop(): void {
    //this.scrollTopService.scrollToTop(); // esse codigo funciona para fazer  a rolagem para o topo da pagina com um serviço angular
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
   this.scrollToTop()
 
        
  }

  

  
  

}
