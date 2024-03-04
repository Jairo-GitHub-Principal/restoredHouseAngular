import { Component, OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScrollTopService } from '../scroll-top.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    currentUrl:string;
    rotaAtual:string
  // constructor(private router:Router) {   }
  constructor(private scrollTopService: ScrollTopService) {}
  scrollToTop(): void {
    this.scrollTopService.scrollToTop();
  }

  ngOnInit() {
   this.scrollToTop()
 
        
  }

  

  
  

}
