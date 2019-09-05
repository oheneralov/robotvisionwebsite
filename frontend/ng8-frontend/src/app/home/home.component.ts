import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public content: string;
  public title: string;
  constructor() {
    this.content = 'Home content';
    this.title = 'Title content'
   }

  ngOnInit() {
  }

}
