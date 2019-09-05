import { Component, OnInit } from '@angular/core';
import { BackendService } from './../backend.service';
import { IPage } from './../page';

class PageInfo implements IPage {
  public title: string;
  public content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public content: string;
  public title: string;
  public pageInfo: any;

  constructor(private readonly backendService: BackendService) {
  }

  ngOnInit() {
    this.pageInfo = this.backendService.getPage('home');
    this.title = this.pageInfo.title;
    this.content = this.pageInfo.content;
  }

}
