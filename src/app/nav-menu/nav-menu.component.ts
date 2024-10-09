import { Component, OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded:true;
  logoTitulo="Restored House"
  constructor() { }

  ngOnInit() {
  }

}
