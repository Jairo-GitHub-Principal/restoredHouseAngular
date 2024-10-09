import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from '../scroll-top.service';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.css']
})
export class ScrollToTopButtonComponent implements OnInit {

  constructor(private scrollTopService: ScrollTopService) {}

  scrollToTop(): void {
    this.scrollTopService.scrollToTop();
  }
  ngOnInit() {
  }

}
