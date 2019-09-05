import { Component, OnInit } from '@angular/core';
import { BackendService } from './../backend.service';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.sass']
})
export class CNNComponent implements OnInit {
  public content: string;
  public title: string;
  public pageInfo: any;

  constructor(private readonly backendService: BackendService) {
  }

  ngOnInit() {
    this.pageInfo = this.backendService.getPage('cnn');
    this.title = this.pageInfo.title;
    this.content = this.pageInfo.content;
  }

}
