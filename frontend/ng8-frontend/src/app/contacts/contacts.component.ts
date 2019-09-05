import { Component, OnInit } from '@angular/core';
import { BackendService } from './../backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  public content: string;
  public title: string;
  public pageInfo: any;

  constructor(private readonly backendService: BackendService) {
  }

  ngOnInit() {
    this.pageInfo = this.backendService.getPage('contacts');
    this.title = this.pageInfo.title;
    this.content = this.pageInfo.content;
  }

}
