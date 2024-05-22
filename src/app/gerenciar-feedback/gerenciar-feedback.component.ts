import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gerenciar-feedback',
  templateUrl: './gerenciar-feedback.component.html',
  styleUrls: ['./gerenciar-feedback.component.css']
})
export class GerenciarFeedbackComponent implements OnInit {
  
  constructor( private route:Router,/*private guardaRota: GuardaRotasService*/) { }

  ngOnInit() {
    
  }

  
  navegarPara(page:string){
    this.route.navigate([page])
  }

}
