import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
page:string|null=null;
  constructor(private route:ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.page = String( params.get("page"))}) 
  }

}
