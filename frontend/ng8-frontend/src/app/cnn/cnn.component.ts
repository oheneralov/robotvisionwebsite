import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.sass']
})
export class CNNComponent implements OnInit {

  public content: string;
  public title: string;
  constructor() {
    this.content = 'CNN content';
    this.title = 'Title content'
   }

  ngOnInit() {
  }

}
